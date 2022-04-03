import express, { Application, Request, Response } from "express"
import signup from './signUp'

const router=express.Router()


router.use("/signup",signup)

export  default router;