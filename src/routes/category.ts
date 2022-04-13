import express from "express"

const router=express.Router()

import { celebrate, Joi, errors, Segments } from 'celebrate';
import {categorySchema} from "../helpers/validation_schema"
import {addCategoryService,deleteCategoryService,getCategoryService,updateCategoryService} from "../services/category"





  router.get("/",getCategoryService)
  router.post("/",celebrate({
    [Segments.BODY]:categorySchema,
  }),addCategoryService)
  router.put("/:id",celebrate({
    [Segments.BODY]:categorySchema,
  }),updateCategoryService)
  router.delete("/:id",deleteCategoryService)

export  default router;