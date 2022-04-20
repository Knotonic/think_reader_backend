import express from "express"

const router=express.Router()

import { celebrate, Joi, errors, Segments } from 'celebrate';
import {refreshTokenSchema} from "../helpers/validation_schema"
import {verifyRefreshToken} from "../services/verifytoken"
import verifytoken from "../helpers/verify_token"

  router.post("/",celebrate({
    [Segments.BODY]:refreshTokenSchema,
  }),verifytoken,verifyRefreshToken)

export  default router;