import jwt from "jsonwebtoken"
import createError from "http-errors"



const signInaccesstoken = (id:any) => {
    console.log("id correct a varutha");
    console.log(id);
    return new Promise((resolve, reject) => {
        const payload = {

        }
        const secrect:string|any = process.env.ACCESS_SECRETKEY;

        const option = { expiresIn: '1200s', issuer: "thinkreaders.com", audience:id.toString() }

        jwt.sign(payload, secrect, option, (err, token) => {
            if (err){
                console.log(err.message);
                reject(new createError.InternalServerError())
            }
            resolve(token)
        })
    })
}



const signrefereshtoken = (id:any) => {
    return new Promise((resolve, reject) => {
        const payload = {

        }
        const secrect:string|any = process.env.REFRESH_SECRETKEY;

        const option = { expiresIn: '1y',  issuer: "thinkreaders.com", audience:id.toString() }

        jwt.sign(payload, secrect, option, (err, token) => {
            if (err){
                console.log(err.message);
                reject(new createError.InternalServerError())
            }
            resolve(token)
        })
    })
}


export  {signInaccesstoken,signrefereshtoken }