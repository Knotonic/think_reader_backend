import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser"
import cors from "cors"
import morgan from "morgan";
import createError from "http-errors"
import { errors } from 'celebrate';
import errorHandler from "./middleware/error";
import auth from './routes/auth'
import verifyToken from "./helpers/verify_token"
import dotenv from 'dotenv';
import database from './helpers/postgresconnection'
database

dotenv.config();


const app: Application = express();


app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send({ msg: "you reaced" });
})
app.use("/", auth);


app.use(async (req, res, next) => {
    next(new createError.NotFound());
})

app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => console.log("server running port 5000"));