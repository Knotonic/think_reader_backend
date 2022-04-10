import {Pool} from 'pg'

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

  
    pool.connect().then(()=>{
      console.log("database connected succefully");
    }).catch((e)=>console.log(e));  
 


export default {
  query: (text:any,value:any) => pool.query(text,value),
}