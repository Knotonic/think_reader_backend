
import bcript from "bcrypt";
import createError  from "http-errors"
import jwt from "jsonwebtoken"
import { signUpUser,
    checkUser, loginUser }  from "../db/controller/auth"

import {signInaccesstoken, signrefereshtoken } from "../helpers/jwt_helper"


const signUpService = async (req:any, res:any, next:any) => {

    try {


        await checkUser(req.body.email);

        const salt = await bcript.genSalt(10);

        const hashPassword = await bcript.hash(req.body.password, salt);



        const saveduser:any = await signUpUser({ email: req.body.email, password: hashPassword });

        const token = await signInaccesstoken(saveduser.id);
        const rtoken = await signrefereshtoken(saveduser.id);
        return res.status(200).send({ "token": token, "rtoken": rtoken });


    } catch (error) {
        next(error);
    }
}


const signInService = async (req:any, res:any, next:any) => {

    try {


        const checkdata:any = await loginUser(req.body.email);
        const bcriptResult = await bcript.compare(req.body.password, checkdata.password);
        if (!bcriptResult) throw new createError.Unauthorized("username/password not valid");
        const token = await signInaccesstoken(checkdata.id);
        const rtoken = await signrefereshtoken(checkdata.id);
        return res.status(200).send({ "token": token, "rtoken": rtoken });


    } catch (error) {
        next(error);
    }
}

const verifyRefreshToken = (req:any, res:any, next:any) => {
    try {

        const token = req.body.token
       
        console.log("token correct a varuthaa");
        console.log(token);
        const refereshSecretkey:string|any=process.env.REFRESH_SECRETKEY;
        jwt.verify(token, refereshSecretkey,async (err:any, payload:any) => {
            if (err) {
                if (err.name == "JsonWebTokenError") {
                    return next(new createError.Unauthorized())
                } else {
                    return next(new createError.Unauthorized(err.message))
                }
            }
            console.log("payload audience correct a varuthaa");
            console.log(payload.aud);

            const id=payload.aud
            const atoken = await signInaccesstoken(id);
            const rtoken = await signrefereshtoken(id);
            return res.status(200).send({ "token": atoken, "rtoken": rtoken });

        })
    } catch (error) {
        next(error)
    }
}


export  {
    signUpService, signInService, verifyRefreshToken
}