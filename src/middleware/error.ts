import {isCelebrateError} from "celebrate"

const errorHandler = async (err:any, req:any, res:any, next:any) => {
   
   if(isCelebrateError(err)){
    const errorBody = err; // 'details' is a Map()
    const { details: [errorDetails] } = errorBody;
  err.message=errorDetails[0]
   }
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message,
        },
    })
}


export default errorHandler;