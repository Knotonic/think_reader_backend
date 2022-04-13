import createError from "http-errors"
import { addviews,getviews} from "../db/controller/views"





const addviewsService = async (req: any, res: any, next: any) => {

    try {
        const data=await addviews(req.body);
     
        return res.status(200).send({"data":data,  });

    } catch (error) {
        next(error);
    }
}





const getviewsService = async (req: any, res: any, next: any) => {


    try {
     const data=await getviews()
        return res.status(200).send({"data": data,  });
     


    } catch (error) {
        next(error);
    }
}






export {
   addviewsService,getviewsService
}