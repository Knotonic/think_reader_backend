import db from './helpers/postgresconnection'
import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser"
import cors from "cors"
import morgan from "morgan";
import createError from "http-errors"
import { errors } from 'celebrate';
import errorHandler from "./middleware/error";
import mainRoute from './routes/main_route'
import verifyToken from "./helpers/verify_token"
import * as dotenv from "dotenv";
import moment, { utc } from 'moment';
import { nextTick } from 'process';
import {CreateQuery} from "./helpers/sql_query"

dotenv.config();






const app: Application = express();


app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));
app.use(cors());
app.use(morgan("dev"));

console.log(process.env.DB_USERNAME);
console.log(process.env.DB_DATABASE)

app.get("/", async(req, res,next) => {
 try {
  const data=await db.query("drop table users",[] )
  return res.send(data.rows);
 } catch (error) {
   next(error);
   
 }

   
 
})

app.post("/", async(req, res) => {

  
})
app.use("/api/v1", mainRoute);


app.use(async (req, res, next) => {
    next(new createError.NotFound());
})

app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => console.log("server running port"+process.env.PORT || 5000));

