import express from "express"

const router=express.Router()

import { celebrate, Joi, errors, Segments } from 'celebrate';
import {categorySchema} from "../helpers/validation_schema"
import {addhashtagService,deletehashtagService,gethashtagService,updatehashtagService} from "../services/hashtag"

import verifytoken from "../helpers/verify_token"



  router.get("/",verifytoken,gethashtagService)
  router.post("/",celebrate({
    [Segments.BODY]:categorySchema,
  }),verifytoken,addhashtagService)
  router.put("/:id",celebrate({
    [Segments.BODY]:categorySchema,
  }),verifytoken,updatehashtagService)
  router.delete("/:id",verifytoken,deletehashtagService)

export  default router;