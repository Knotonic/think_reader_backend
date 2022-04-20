import express from "express"

const router=express.Router()

import { celebrate, Joi, errors, Segments } from 'celebrate';
import {interestSchema} from "../helpers/validation_schema"
import {addInterestService,deleteInterestService,getInterestService,updateInterestService} from "../services/interest"
import verifytoken from "../helpers/verify_token"




  router.get("/",verifytoken,getInterestService)
  router.post("/",celebrate({
    [Segments.BODY]:interestSchema,
  }),verifytoken,addInterestService)
  router.put("/:id",celebrate({
    [Segments.BODY]:interestSchema,
  }),verifytoken,updateInterestService)
  router.delete("/:id",verifytoken,deleteInterestService)

export  default router;