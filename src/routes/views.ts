import express from "express"

const router=express.Router()

import { celebrate, Joi, errors, Segments } from 'celebrate';
import {viewsSchema} from "../helpers/validation_schema"
import {addviewsService,getviewsService} from "../services/views"





  router.get("/",getviewsService)
  router.post("/",celebrate({
    [Segments.BODY]:viewsSchema,
  }),addviewsService)
 

export  default router;