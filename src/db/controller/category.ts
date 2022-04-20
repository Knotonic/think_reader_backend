import createError from "http-errors"
import db from '../../helpers/postgresconnection'


const getcategory = async () => {
    try {
      const category = await db.query('select * from category', [])
      return category.rows;
    } catch (error) {
      throw error
    }
}


const addcategory = async (data:any) => {
    try {
      const category = await db.query('insert into category (title,created_at,created_by) values ($1,$2,$3)  RETURNING *', [data.title, data.created_by,new Date()])
      return category.rows;
    } catch (error) {
      throw error
    }
}


const updatecategory = async (values:any,id:any) => {
  let columns = Object.keys(values);
  let params = [id];
  let query = "UPDATE category SET ";
  for(let i = 0; i < columns.length; i++) {
    query = `${query}${columns[i]} = $${params.length + 1},`
    params.push(values[columns[i]]);
  }
  query = `${query.substring(0, query.length-1)} WHERE id = $1 RETURNING *`
    try {
      const category = await db.query(query, params)
      return category.rows;
    } catch (error) {
      throw error
    }
}



const deletecategory = async (id:any) => {
    try {
      const category = await db.query('delete from category where id=$1', [id])
      return category.rows;
    } catch (error) {
      throw error
    }
}




  export{
    getcategory,addcategory,updatecategory,deletecategory
  }