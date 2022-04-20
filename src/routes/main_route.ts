import express, { Application, Request, Response } from "express"
import signup from './signUp'
import verifytoken  from "./verifytoken"
import signIn from './signin'
import user from "./user"
import interest from './interest'
import category from './category'
import hashtag from './hashtag'
import post from './post'
import views from './views'



const router=express.Router()


router.use("/signup",signup)
router.use("/signin",signIn)
router.use("/verifytoken",verifytoken)
router.use("/user",user)
router.use("/interest",interest)
router.use("/category",category)
router.use("/hashtag",hashtag)
router.use("/post",post)
router.use("/views",views)

export  default router;