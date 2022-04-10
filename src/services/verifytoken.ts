import createError from "http-errors"
import {signInaccesstoken,signrefereshtoken} from "../helpers/jwt_helper"
import jwt from "jsonwebtoken"


const verifyRefreshToken = (req:any, res:any, next:any) => {
    try {

        const token = req.body.token
       
        console.log("token correct a varuthaa");
        console.log(token);
        jwt.verify(token, process.env.REFRESH_SECRETKEY,async (err:any, payload:any) => {
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
            return res.status(200).send({ "token": atoken, "refereshtoken": rtoken });

        })
    } catch (error) {
        next(error)
    }
}


export {
    verifyRefreshToken 
}