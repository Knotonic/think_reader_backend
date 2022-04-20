
import { Joi } from 'celebrate';


const emailCheckSchema=Joi.object({
    email:Joi.string().email().required(),
})
const submitOtpSchema=Joi.object({
    email:Joi.string().email().required(),
    otp:Joi.string().required().length(6)
})

const signinwithemailSchema=Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required()
})
const refreshTokenSchema=Joi.object({
    password:Joi.string().required(),
})


const passwordSchema=Joi.object({
    id:Joi.number().required(),
    password:Joi.string().required(),
})

const interestSchema=Joi.object({
   
    title:Joi.string().required(),
    image:Joi.string().required(),
    created_by:Joi.number().required(),
})
const categorySchema=Joi.object({
   
    title:Joi.string().required(),
   
    created_by:Joi.number().required(),
})

const postSchema=Joi.object({
   
    title:Joi.string().required(),
   
    description:Joi.string().required(),
    user_id:Joi.number().required(),
    content:Joi.string().required(),
    category:Joi.number().required(),
    hashtag:Joi.array().required()
})
const viewsSchema=Joi.object({
    user_id:Joi.number().required(),
    post_id:Joi.number().required(), 
})

export  {emailCheckSchema,refreshTokenSchema,submitOtpSchema,passwordSchema,signinwithemailSchema,interestSchema,categorySchema,postSchema,viewsSchema}
