import express, { Application, Request, Response } from "express"
import signup from './signUp'
import verifytoken  from "./verifytoken"

const router=express.Router()


router.use("/signup",signup)
router.use("/signin",signup)
router.use("/verifytoken",verifytoken)
router.use("/user",verifytoken)
router.use("/interest",verifytoken)
router.use("/category",verifytoken)
router.use("/hashtag",verifytoken)
router.use("/post",verifytoken)
router.use("/views",verifytoken)

export  default router;