import createError from "http-errors"
import db from '../../helpers/postgresconnection'


const getviews = async () => {
    try {
      const views = await db.query('select * from views', [])
      return views.rows;
    } catch (error) {
      throw error
    }
}


const addviews = async (data:any) => {
    try {
      const views = await db.query('insert into views (post_id,user_id,created_at) values ($1,$2,$3)  RETURNING *', [data.post_id,data.user_id,new Date()])
      return views.rows;
    } catch (error) {
      throw error
    }
}







  export{
    getviews,addviews
  }