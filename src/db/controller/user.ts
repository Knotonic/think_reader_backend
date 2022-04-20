import createError from "http-errors"
import db from '../../helpers/postgresconnection'


const getUserdata = async (id:any) => {
  console.log("id enna varuthu");
console.log(id);
    try {
      const user = await db.query('select * from users where id=$1 limit 1', [id])
      return user.rows;
    } catch (error) {
      throw error
    }
  }

  const getUserbyEmail = async (email:any) => {

    try {
      const user = await db.query('select * from users where email=$1 limit 1', [email])
      return user.rows;
    } catch (error) {
      throw error
    }
  }


const updateUserdata = async (values:any,id:any) => {
  let columns = Object.keys(values);
  let params = [id];
  let query = "UPDATE users SET ";
  for(let i = 0; i < columns.length; i++) {
    query = `${query}${columns[i]} = $${params.length + 1},`
    params.push(values[columns[i]]);
  }
  query = `${query.substring(0, query.length-1)} WHERE id = $1 RETURNING *`

    try {
      const user = await db.query(query,params)
      return user.rows;
    } catch (error) {
      throw error
    }
  }


  export{
    updateUserdata,getUserdata,getUserbyEmail
  }