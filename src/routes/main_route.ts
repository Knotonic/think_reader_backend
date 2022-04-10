import express, { Application, Request, Response } from "express"
import signup from './signUp'
import verifytoken  from "./verifytoken"

const router=express.Router()


router.use("/signup",signup)
router.use("/verifytoken",verifytoken)

export  default router;