import createError from "http-errors"
import { checkUserAlreadyExist, checkOtp, addOtp, verifyOtp, createUser } from "../db/controller/signup"
import {signInaccesstoken,signrefereshtoken} from "../helpers/jwt_helper"




const sendotp = async (req: any, res: any, next: any) => {

    try {
        const checkdata = await checkUserAlreadyExist(req.body.email);

        const checkotpdata = await checkOtp(req.body.email);
        if (checkotpdata == null) {
            const otpdata = await addOtp(req.body.email);


            return res.send({ data: otpdata });
        }

        return res.status(200).send({ data: checkotpdata });


    } catch (error) {
        next(error);
    }
}





const submitOtpService = async (req: any, res: any, next: any) => {


    try {
        const checkdata = await verifyOtp(req.body.email, req.body.otp);

        if (checkdata.length == 0) {
            throw next(new createError.NotFound("Otp Not Verified.Please check your otp"))
        }

        const createUserdata:any = await createUser(req.body.email);
        const token = await signInaccesstoken(createUserdata[0].id);
        const rtoken = await signrefereshtoken(createUserdata[0].id);
        return res.status(200).send({"token": token, "refereshtoken": rtoken });
     


    } catch (error) {
        next(error);
    }
}




export {
    sendotp,
    submitOtpService
}