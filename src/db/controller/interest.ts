import createError from "http-errors"
import db from '../../helpers/postgresconnection'


const getInterest = async () => {
    try {
      const interest = await db.query('select * from interest', [])
      return interest.rows;
    } catch (error) {
      throw error
    }
}


const addInterest = async (data:any) => {
    try {
      const interest = await db.query('insert into interest (title,image,created_at,created_by) values ($1,$2,$3,$4)  RETURNING *', [data.title,data.image, data.created_by,new Date()])
      return interest.rows;
    } catch (error) {
      throw error
    }
}


const updateInterest = async (data:any) => {
    try {
      const interest = await db.query('insert into interest (title,image,created_at,created_by) values ($1,$2,$3,$4)  RETURNING *', [data.title,data.image, data.created_by,new Date()])
      return interest.rows;
    } catch (error) {
      throw error
    }
}



const deleteInterest = async (id:any) => {
    try {
      const interest = await db.query('delete from interest where id=$1', [id])
      return interest.rows;
    } catch (error) {
      throw error
    }
}




  export{
    getInterest,addInterest,updateInterest,deleteInterest
  }