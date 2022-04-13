import express from "express"

const router=express.Router()

import { celebrate, Joi, errors, Segments } from 'celebrate';
import {signinwithemailSchema} from "../helpers/validation_schema"
import {signInWithEmail} from "../services/signin"




  router.post("/withemail",celebrate({
    [Segments.BODY]:signinwithemailSchema,
  }),signInWithEmail)

export  default router;