
import { Joi } from 'celebrate';


const userSignupSchema=Joi.object({
    email:Joi.string().min(8).required(),
    password:Joi.string().min(8).required()
})


const refreshTokenSchema=Joi.object({
    token:Joi.string().required(),
  
})


export  {userSignupSchema,refreshTokenSchema}