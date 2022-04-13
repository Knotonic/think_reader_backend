import createError from "http-errors"
import { addpost,deletepost,getpost,updatepost} from "../db/controller/post"





const addpostService = async (req: any, res: any, next: any) => {

    try {
        const data=await addpost(req.body);
     
        return res.status(200).send({"data":data,  });

    } catch (error) {
        next(error);
    }
}





const getpostService = async (req: any, res: any, next: any) => {


    try {
     const data=await getpost()
        return res.status(200).send({"data": data,  });
     


    } catch (error) {
        next(error);
    }
}




const updatepostService = async (req: any, res: any, next: any) => {


    try {
     const data=await updatepost(req.params.id)
        return res.status(200).send({"data": data,  });
     


    } catch (error) {
        next(error);
    }
}


const deletepostService = async (req: any, res: any, next: any) => {


    try {
        const data=await deletepost(req.params.id)
        return res.status(200).send({"msg": "post Deleted Successfully",  });
     


    } catch (error) {
        next(error);
    }
}


export {
   addpostService,deletepostService,getpostService,updatepostService
}