import createError from "http-errors"
import { addhashtag,deletehashtag,gethashtag,updatehashtag} from "../db/controller/hashtag"





const addhashtagService = async (req: any, res: any, next: any) => {

    try {
        const data=await addhashtag(req.body);
     
        return res.status(200).send({"data":data,  });

    } catch (error) {
        next(error);
    }
}





const gethashtagService = async (req: any, res: any, next: any) => {


    try {
     const data=await gethashtag()
        return res.status(200).send({"data": data,  });
     


    } catch (error) {
        next(error);
    }
}




const updatehashtagService = async (req: any, res: any, next: any) => {


    try {
     const data=await updatehashtag(req.params.id)
        return res.status(200).send({"data": data,  });
     


    } catch (error) {
        next(error);
    }
}


const deletehashtagService = async (req: any, res: any, next: any) => {


    try {
        const data=await deletehashtag(req.params.id)
        return res.status(200).send({"msg": "hashtag Deleted Successfully",  });
     


    } catch (error) {
        next(error);
    }
}


export {
   addhashtagService,deletehashtagService,gethashtagService,updatehashtagService
}