import express from "express"

const router=express.Router()
import { signUpService,signInService, verifyRefreshToken} from "../services/auth";
import { celebrate, Joi, errors, Segments } from 'celebrate';
import {userSignupSchema,refreshTokenSchema} from "../helpers/validation_schema"

router.post("/signUp",celebrate({
    [Segments.BODY]: userSignupSchema,
  }),signUpService)




  router.post("/signIn",celebrate({
    [Segments.BODY]: userSignupSchema,
  }),signInService)



  router.post("/refreshtoken",celebrate({
    [Segments.BODY]: refreshTokenSchema,
  }), verifyRefreshToken)



export  default router;