import express from "express"

const router=express.Router()

import { celebrate, Joi, errors, Segments } from 'celebrate';
import {categorySchema} from "../helpers/validation_schema"
import {addCategoryService,deleteCategoryService,getCategoryService,updateCategoryService} from "../services/category"
import verifytoken from "../helpers/verify_token"





  router.get("/",verifytoken,getCategoryService)
  router.post("/",celebrate({
    [Segments.BODY]:categorySchema,
  }),verifytoken,addCategoryService)
  router.put("/:id",celebrate({
    [Segments.BODY]:categorySchema,
  }),verifytoken,updateCategoryService)
  router.delete("/:id",verifytoken,deleteCategoryService)

export  default router;