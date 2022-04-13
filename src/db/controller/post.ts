import createError from "http-errors"
import db from '../../helpers/postgresconnection'


const getpost = async () => {
  try {
    const post = await db.query('select * from post', [])
    return post.rows;
  } catch (error) {
    throw error
  }
}


const addpost = async (data: any) => {
  try {
    const post = await db.query('insert into post (title,description,user_id,content,created_at,category,hashtag) values ($1,$2,$3,$4,$5,$6,$7)  RETURNING *', [data.title, data.description, data.user_id, data.content, new Date(), data.category, data.hashtag])
    return post.rows;
  } catch (error) {
    throw error
  }
}


const updatepost = async (data: any) => {
  try {
    const post = await db.query('insert into post (title,description,user_id,content,created_at,category,hashtag) values ($1,$2,$3,$4,$5,$6,$7)  RETURNING *', [data.title, data.description, data.user_id, data.content, new Date(), data.category, data.hashtag])
    return post.rows;
  } catch (error) {
    throw error
  }
}



const deletepost = async (id: any) => {
  try {
    const post = await db.query('delete from post where id=$1', [id])
    return post.rows;
  } catch (error) {
    throw error
  }
}




export {
  getpost, addpost, updatepost, deletepost
}