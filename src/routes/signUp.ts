import express from "express"

const router=express.Router()
import { signUpService,signInService, verifyRefreshToken} from "../services/auth";
import { celebrate, Joi, errors, Segments } from 'celebrate';
import {emailCheckSchema,refreshTokenSchema,submitOtpSchema} from "../helpers/validation_schema"
import {sendotp,submitOtpService} from "../services/signup"





  router.post("/getotp",celebrate({
    [Segments.BODY]: emailCheckSchema,
  }),sendotp)

  router.post("/submitotp",celebrate({
    [Segments.BODY]: submitOtpSchema,
  }),submitOtpService)

  // router.post("/refreshtoken",celebrate({
  //   [Segments.BODY]: refreshTokenSchema,
  // }), verifyRefreshToken)



export  default router;