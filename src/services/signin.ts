import createError from "http-errors"
import bcript from "bcrypt"
import {getUserdataWithEmail} from '.././db/controller/signin'
import {signInaccesstoken,signrefereshtoken} from "../helpers/jwt_helper"


const signInWithEmail = async (req: any, res: any, next: any) => {
    try {
      

        const checkdata:any = await getUserdataWithEmail(req.body.email);
        if(checkdata.length==0) throw new createError.Unauthorized("User Not Found..Please signUp");
        const bcriptResult = await bcript.compare(req.body.password, checkdata[0].password);
        if (!bcriptResult) throw new createError.Unauthorized("Password is wrong");
        const token = await signInaccesstoken(checkdata[0].id);
        const rtoken = await signrefereshtoken(checkdata[0].id);
        return res.status(200).send({ "token": token, "rtoken": rtoken });



    } catch (error) {
        next(error)
    }
}



export {
    signInWithEmail
}