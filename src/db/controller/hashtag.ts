import createError from "http-errors"
import db from '../../helpers/postgresconnection'


const gethashtag = async () => {
    try {
      const hashtag = await db.query('select * from hashtag', [])
      return hashtag.rows;
    } catch (error) {
      throw error
    }
}


const addhashtag = async (data:any) => {
    try {
      const hashtag = await db.query('insert into hashtag (title,created_at,created_by) values ($1,$2,$3)  RETURNING *', [data.title, data.created_by,new Date()])
      return hashtag.rows;
    } catch (error) {
      throw error
    }
}


const updatehashtag = async (data:any) => {
    try {
      const hashtag = await db.query('insert into hashtag (title,image,created_at,created_by) values ($1,$2,$3,$4)  RETURNING *', [data.title,data.image, data.created_by,new Date()])
      return hashtag.rows;
    } catch (error) {
      throw error
    }
}



const deletehashtag = async (id:any) => {
    try {
      const hashtag = await db.query('delete from hashtag where id=$1', [id])
      return hashtag.rows;
    } catch (error) {
      throw error
    }
}




  export{
    gethashtag,addhashtag,updatehashtag,deletehashtag
  }