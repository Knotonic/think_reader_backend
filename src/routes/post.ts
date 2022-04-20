import express from "express"

const router=express.Router()

import { celebrate, Joi, errors, Segments } from 'celebrate';
import {postSchema} from "../helpers/validation_schema"
import {addpostService,deletepostService,getpostService,updatepostService} from "../services/post"
import verifytoken from "../helpers/verify_token"




  router.get("/",verifytoken,getpostService)
  router.post("/",celebrate({
    [Segments.BODY]:postSchema,
  }),verifytoken,addpostService)
  router.put("/:id",celebrate({
    [Segments.BODY]:postSchema,
  }),verifytoken,updatepostService)
  router.delete("/:id",verifytoken,deletepostService)

export  default router;