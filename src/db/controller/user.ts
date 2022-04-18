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
  // let columns = Object.keys(values);
  // let params = [id];
  // let query = "UPDATE users SET ";
  // for(let i = 0; i < columns.length; i++) {
  //   query = `${query}${columns[i]} = $${params.length + 1},`
  //   params.push(values[columns[i]]);
  // }
  // query = `${query.substring(0, query.length-1)} WHERE id = $1`
  // console.log(query);
  // console.log(params)
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