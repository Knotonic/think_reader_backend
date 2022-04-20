import express from "express"

const router=express.Router()

import { celebrate, Joi, errors, Segments } from 'celebrate';
import {refreshTokenSchema} from "../helpers/validation_schema"
import {getUser,updateUser} from "../services/user"
import verifytoken from "../helpers/verify_token"

router.get("/",verifytoken,getUser)
router.patch("/",verifytoken,updateUser)



export  default router;