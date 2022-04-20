import createError from "http-errors"
import db from '../../helpers/postgresconnection'
import moment from 'moment'
import nodemailer from "nodemailer"
import {generateRandomNumber} from "../../helpers/generate_randomnumber"




const checkUserAlreadyExist = async (email: string) => {
  console.log("email la enna varuthu");
  console.log(email);
  try {
    const user = await db.query('select * from users where email_id=$1 limit 1', [email])
    console.log("enna data varuthu");
    console.log(user.rows);
    if (user.rows.length != 0) throw new createError.NotFound("User Already Exists");
    return user;
  } catch (error) {
    throw error
  }
}


const checkOtp = async (email: string) => {
  try {

    const otp = await db.query('select * from otp where email_id=$1 order by created_at DESC limit 1', [email])
    if (otp.rows.length != 0) {
      const data: any = otp.rows[0];
      console.log(data);
      const { created_at } = data;
      const dbtime = moment(created_at);
      console.log(created_at);
      console.log(dbtime.date);

      const differentTime: number = moment().diff(dbtime, 'minutes');
      console.log("time diffrent enna varuthu");
      console.log(differentTime);
      if (differentTime <= 5) {
        return otp.rows;
      }
      return null;
    }

    return null;

  } catch (error) {
    throw error
  }
}

const checkSuccessOtp = async (email: string) => {
  try {

    const otp = await db.query('select * from otp where email_id=$1 order by created_at DESC limit 1', [email])
    return otp.rows;

  } catch (error) {
    throw error
  }
}


const addOtp = async (email: string) => {
  console.log("checkotp");
  console.log(email);
  try {
    const randomNumber=generateRandomNumber();
    // var transporter = nodemailer.createTransport({
  
    //   host: "smtp-relay.sendinblue.com",
    //   port: 587,
    //   auth: {
    //     user:"knotonicdevdesign@gmail.com",
    //     pass: "xsmtpsib-95e105507a0f7a80357afacf9125858774e66ae1d84618de462634addcc89898-9mGTFBcZqnNAf0JU",
    //   },
    // });
   

    // const emailstatus=await transporter.sendMail({
    //   from: "knotonicdevdesign@gmail.com",
    //   to: email,
    //   subject: "ThinkReaders",
    //   text: `Email ${randomNumber}`,
    // });
    const otp = await db.query('insert into otp (otp,email_id,type,created_at) values ($1,$2,$3,$4)  RETURNING *', [randomNumber, email, 0,new Date()])
    console.log("otp data");
    console.log(otp);

    return otp.rows;
  } catch (error) {
    throw error
  }
}

const verifyOtp = async (email: string, otpdata: string) => {

  try {
    const otp = await db.query('select * from otp where email_id=$1 and otp=$2 order by created_at DESC limit 1', [email, otpdata])
    return otp.rows;
  } catch (error) {
    throw error
  }
}


const createUser = async (email:string,password:string) => {

  try {
    const user = await db.query('insert into users (email_id,auth_method,created_at,password) values ($1,$2,$3,$4)  RETURNING *', [ email, 1,new Date(),password])
    return user.rows;
  } catch (error) {
    throw error
  }
}

export {
  checkUserAlreadyExist, checkOtp, addOtp,verifyOtp,createUser,checkSuccessOtp
}