import jwt from "jsonwebtoken"
import createError from "http-errors"

const verifytoken=(req:any,res:any,next:any)=>{
if(!req.headers["authorization"]) {
   return next(new createError.Unauthorized("token varala"))
}

const accesstoken=req.headers["authorization"]
const splitoken=accesstoken.split(" ")

const token=splitoken[1]
console.log("token correct a varuthaa");
console.log(token);
const accessKey:string|any=process.env.ACCESS_SECRETKEY

jwt.verify(token, accessKey,(err:any,payload:any)=>{
 if(err){
    if(err.name=="JsonWebTokenError"){
        return next(new createError.Unauthorized())
    }else{
     return next(new createError.Unauthorized(err.message)) 
    }
 }

    req.payload=payload

    next()
})
}


export default verifytoken;