import e from 'express';
import {Pool} from 'pg'
import{CreateQuery} from "./sql_query"
     // REPLACE WITH YOUR DB NAME

     const pool = new Pool({
  
      user: "xabqhqesmylpam",
      host: "ec2-44-194-92-192.compute-1.amazonaws.com",
      database:"d5rvt4itke0ooj",
      password: "cb273f80f769dccddf475d3dcf4067849d65dae8242bfa2c1594e0a8163c5095",
      port:5432,
      ssl: {    
        rejectUnauthorized: false
      }
     
    })

  
    pool.connect().then(async()=>{
   try {
     //users
const usertable=
    await pool.query(CreateQuery.createUsersTable);
    console.log({"usertable":usertable.rows});
    //interest
  const interest=  await pool.query(CreateQuery.createInterestTable);
  console.log({"interesttable":interest.rows});
    //otp
 const otp=   await pool.query(CreateQuery.createOtpTable);
 console.log({"otptable":otp.rows});
    //category
  const category=  await pool.query(CreateQuery.createCategoryTable);
    console.log({"categorytable":category.rows});
    //hashtag
  const hashtag=  await pool.query(CreateQuery.createHashtagTable);
    console.log({"hastagtable":hashtag.rows});
    //post
  const post=  await pool.query(CreateQuery.createPostTable);
  console.log({"posttable":post.rows});
    //views
   const views= await pool.query(CreateQuery.createViewsTable);
   console.log({"viewstable":views.rows});
   } catch (error) {
     console.log(error);
     throw e;
   }
    }).catch((e)=>console.log(e));  
 


export default {
  query: (text:any,value:any) => pool.query(text,value),
}