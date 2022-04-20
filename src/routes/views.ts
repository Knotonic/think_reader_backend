import express from "express"

const router=express.Router()

import { celebrate, Joi, errors, Segments } from 'celebrate';
import {viewsSchema} from "../helpers/validation_schema"
import {addviewsService,getviewsService} from "../services/views"
import verifytoken from "../helpers/verify_token"



router.get("/",verifytoken,getviewsService)
router.post("/",celebrate({
    [Segments.BODY]:viewsSchema,
  }),verifytoken,addviewsService)
 

export  default router;