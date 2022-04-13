import createError from "http-errors"
import bcript from "bcrypt"
import { updateUserdata,getUserdata } from "../db/controller/user";


const createPassword = async (req: any, res: any, next: any) => {
    try {
        const salt = await bcript.genSalt(10);
        const hashPassword = await bcript.hash(req.body.password, salt);
        const password = { "password": hashPassword }

        const user = await updateUserdata(password, req.user_id);



    } catch (error) {
        next(error)
    }
}



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
    createPassword,getUser,updateUser
}