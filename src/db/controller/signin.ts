import createError from "http-errors"
import db from '../../helpers/postgresconnection'


const getUserdataWithEmail = async (email:any) => {

    try {
      const user = await db.query('select * from users where email_id=$1 limit 1', [email])
      return user.rows;
    } catch (error) {
      throw error
    }
  }






  export{
    getUserdataWithEmail
  }