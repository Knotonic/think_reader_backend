import express from "express"

const router=express.Router()

import { celebrate, Joi, errors, Segments } from 'celebrate';
import {refreshTokenSchema} from "../helpers/validation_schema"
import {createPassword,getUser,updateUser} from "../services/user"


router.get("/",getUser)
router.patch("/",updateUser)

  router.patch("/createpassword",celebrate({
    [Segments.BODY]:refreshTokenSchema,
  }),createPassword)

export  default router;