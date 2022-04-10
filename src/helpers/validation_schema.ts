
import { Joi } from 'celebrate';


const emailCheckSchema=Joi.object({
    email:Joi.string().email().required(),
})
const submitOtpSchema=Joi.object({
    email:Joi.string().email().required(),
    otp:Joi.string().required().length(6)
})


const refreshTokenSchema=Joi.object({
    token:Joi.string().required(),
})


export  {emailCheckSchema,refreshTokenSchema,submitOtpSchema}