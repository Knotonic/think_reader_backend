import express from "express"

const router=express.Router()

import { celebrate, Joi, errors, Segments } from 'celebrate';
import {categorySchema} from "../helpers/validation_schema"
import {addhashtagService,deletehashtagService,gethashtagService,updatehashtagService} from "../services/hashtag"





  router.get("/",gethashtagService)
  router.post("/",celebrate({
    [Segments.BODY]:categorySchema,
  }),addhashtagService)
  router.put("/:id",celebrate({
    [Segments.BODY]:categorySchema,
  }),updatehashtagService)
  router.delete("/:id",deletehashtagService)

export  default router;