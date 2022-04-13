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


const updatecategory = async (data:any) => {
    try {
      const category = await db.query('insert into category (title,image,created_at,created_by) values ($1,$2,$3,$4)  RETURNING *', [data.title,data.image, data.created_by,new Date()])
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