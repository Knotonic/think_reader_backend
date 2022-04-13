import express from "express"

const router=express.Router()

import { celebrate, Joi, errors, Segments } from 'celebrate';
import {postSchema} from "../helpers/validation_schema"
import {addpostService,deletepostService,getpostService,updatepostService} from "../services/post"





  router.get("/",getpostService)
  router.post("/",celebrate({
    [Segments.BODY]:postSchema,
  }),addpostService)
  router.put("/:id",celebrate({
    [Segments.BODY]:postSchema,
  }),updatepostService)
  router.delete("/:id",deletepostService)

export  default router;