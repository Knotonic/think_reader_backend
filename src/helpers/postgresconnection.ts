import {Pool} from 'pg'

     // REPLACE WITH YOUR DB NAME

class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
  const pool = new Pool({
    connectionString:process.env.database,
   
  })
pool.connect().then(()=>{
  console.log("database connected succefully");
}).catch((e)=>console.log("some thing wrong"));  
}
}
export default  new Database()