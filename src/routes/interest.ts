import express from "express"

const router=express.Router()

import { celebrate, Joi, errors, Segments } from 'celebrate';
import {interestSchema} from "../helpers/validation_schema"
import {addInterestService,deleteInterestService,getInterestService,updateInterestService} from "../services/interest"





  router.get("/",getInterestService)
  router.post("/",celebrate({
    [Segments.BODY]:interestSchema,
  }),addInterestService)
  router.put("/:id",celebrate({
    [Segments.BODY]:interestSchema,
  }),updateInterestService)
  router.delete("/:id",deleteInterestService)

export  default router;