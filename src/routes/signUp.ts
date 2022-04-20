import express from "express"

const router=express.Router()

import { celebrate, Joi, errors, Segments } from 'celebrate';
import {emailCheckSchema,submitOtpSchema,signinwithemailSchema} from "../helpers/validation_schema"
import {sendotp,submitOtpService,createPassword} from "../services/signup"





  router.post("/getotp",celebrate({
    [Segments.BODY]: emailCheckSchema,
  }),sendotp)

  router.post("/submitotp",celebrate({
    [Segments.BODY]: submitOtpSchema,
  }),submitOtpService)
  router.patch("/createpassword",celebrate({
    [Segments.BODY]:signinwithemailSchema,
  }),createPassword)
export  default router;