import createError from "http-errors"
import bcript from "bcrypt"
import { updateUserdata,getUserdata } from "../db/controller/user";
import { checkUserAlreadyExist, checkOtp, addOtp, verifyOtp, createUser } from "../db/controller/signup"
import {getUserbyEmail} from "../db/controller/user"
import {signInaccesstoken,signrefereshtoken} from "../helpers/jwt_helper"





const getUser = async (req: any, res: any, next: any) => {
    try {
      

        const user = await getUserdata(req.user_id);
        return res.status(200).send({data:user});



    } catch (error) {
        next(error)
    }
}


const updateUser = async (req: any, res: any, next: any) => {
    try {      
        const user = await updateUserdata(req.body, req.user_id);
        return res.status(200).send({data:user});
    } catch (error) {
        next(error)
    }
}
export {
   getUser,updateUser
}