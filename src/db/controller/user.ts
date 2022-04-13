import createError from "http-errors"
import db from '../../helpers/postgresconnection'


const getUserdata = async (id:any) => {

    try {
      const user = await db.query('select * from user where id=$1 limit 1', [id])
      return user.rows;
    } catch (error) {
      throw error
    }
  }



const updateUserdata = async (data:any,id:any) => {

    try {
      const user = await db.query('update', [])
      return user.rows;
    } catch (error) {
      throw error
    }
  }


  export{
    updateUserdata,getUserdata
  }