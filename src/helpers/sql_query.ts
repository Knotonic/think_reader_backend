



const CreateQuery={
    createUsersTable:'CREATE TABLE IF NOT EXISTS users ( id serial PRIMARY KEY, first_name VARCHAR ( 50 ), last_name VARCHAR ( 50 ), email_id VARCHAR ( 255 )  UNIQUE, mobile_no VARCHAR ( 25 )  UNIQUE, image VARCHAR ( 255 ), user_name VARCHAR ( 100 ) UNIQUE, about VARCHAR ( 500 ), profession VARCHAR(100), interest integer[] ,password VARCHAR(255),auth_method smallint DEFAULT 0,created_at timestamp without time zone,status smallint DEFAULT 0)',
    createOtpTable:'CREATE TABLE IF NOT EXISTS otp ( id serial PRIMARY KEY, otp VARCHAR ( 6 ), email_id VARCHAR ( 255 ) ,created_at timestamp without time zone,type smallint DEFAULT 0)',
    createInterestTable:'CREATE  TABLE IF NOT EXISTS interest ( id serial PRIMARY KEY, title VARCHAR ( 250 ) UNIQUE , image VARCHAR ( 255 ),created_at timestamp without time zone,created_by smallint)',
    createCategoryTable:'CREATE TABLE IF NOT EXISTS category ( id serial PRIMARY KEY, title VARCHAR ( 250 ) UNIQUE ,created_at timestamp without time zone,created_by smallint)',
    createHashtagTable:'CREATE TABLE IF NOT EXISTS hashtag ( id serial PRIMARY KEY, title VARCHAR ( 250 ) UNIQUE ,created_at timestamp without time zone,created_by smallint REFERENCES users (id) ON DELETE SET NULL)',
    createPostTable:'CREATE TABLE IF NOT EXISTS post ( id serial PRIMARY KEY, title VARCHAR ( 500 ) , description VARCHAR ( 1000 ),content json ,created_at timestamp without time zone,user_id int REFERENCES users (id) ON DELETE SET NULL,category_id smallint REFERENCES category (id) ON DELETE SET NULL,hashtag integer[])',
    createViewsTable:'CREATE TABLE IF NOT EXISTS hashtag ( id serial PRIMARY KEY, created_at timestamp without time zone,post_id int REFERENCES post (id) ON DELETE SET NULL,user_id VARCHAR(50))',
   
   
   
}
const checkTableAlreadyExists="SELECT EXISTS ( SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename  = $1  )"

export{
    CreateQuery,checkTableAlreadyExists
}