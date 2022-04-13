import express from "express"

const router=express.Router()

import { celebrate, Joi, errors, Segments } from 'celebrate';
import {emailCheckSchema,refreshTokenSchema,submitOtpSchema} from "../helpers/validation_schema"
import {sendotp,submitOtpService} from "../services/signup"





  router.post("/getotp",celebrate({
    [Segments.BODY]: emailCheckSchema,
  }),sendotp)

  router.post("/submitotp",celebrate({
    [Segments.BODY]: submitOtpSchema,
  }),submitOtpService)

export  default router;