import createError from "http-errors"
import { checkUserAlreadyExist, checkOtp, addOtp, verifyOtp, createUser,checkSuccessOtp } from "../db/controller/signup"
import {getUserbyEmail} from "../db/controller/user"
import {signInaccesstoken,signrefereshtoken} from "../helpers/jwt_helper"
import bcript from "bcrypt"
import {getUserdataWithEmail} from '.././db/controller/signin'



const sendotp = async (req: any, res: any, next: any) => {

    try {

        const checkdata = await checkUserAlreadyExist(req.body.email);
        const checkotpdata = await checkOtp(req.body.email);
        if (checkotpdata == null) {
            const otpdata = await addOtp(req.body.email);


            return res.status(200).send({ data: otpdata });
        }

        return res.status(200).send({ data: checkotpdata });


    } catch (error) {
        next(error);
    }
}




//need one update check in that otp part
//create password la already verified nnu check panna oru int value a use panni paakkanum
const submitOtpService = async (req: any, res: any, next: any) => {


    try {
        const checkdata = await verifyOtp(req.body.email, req.body.otp);

        if (checkdata.length == 0) {
            throw new createError.NotFound("Otp Not Verified.Please check your otp");
        }
 return res.status(200).send({"msg":"Otp Verified Successfully"});
     


    } catch (error) {
        next(error);
    }
}

const createPassword = async (req: any, res: any, next: any) => {
    try {
        const checkotpdata = await checkSuccessOtp(req.body.email);
        if(checkotpdata.length==0){
            throw new createError.NotFound("Please Verify Otp");
        }
        const salt = await bcript.genSalt(10);
        const hashPassword = await bcript.hash(req.body.password, salt);
        // const password = { "password": hashPassword }
  
        // const user = await updateUserdata(password, req.user_id);
  
        const createUserdata:any = await createUser(req.body.email,hashPassword);
        const token = await signInaccesstoken(createUserdata[0].id);
        const rtoken = await signrefereshtoken(createUserdata[0].id);
        return res.status(200).send({"token": token, "refereshtoken": rtoken });
  
    } catch (error) {
        next(error)
    }
  }


export {
    sendotp,
    submitOtpService,createPassword
}