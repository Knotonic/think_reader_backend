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
dotenv.config();




console.log(__dirname);


const app: Application = express();


app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));
app.use(cors());
app.use(morgan("dev"));

console.log(process.env.DB_USERNAME);
console.log(process.env.DB_DATABASE)

app.get("/", async(req, res) => {
 
  const text = 'SELECT * FROM users'
  // const values = ['BASE TABLE', 'public'];
    try {
        const response = await db.query(text)
      
        const {rows}=response;
        return res.send({data:rows});
      
      } catch (err:any) {
        console.log(err.stack)
      }
})
app.use("/api/v1", mainRoute);


app.use(async (req, res, next) => {
    next(new createError.NotFound());
})

app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => console.log("server running port"+process.env.PORT || 5000));