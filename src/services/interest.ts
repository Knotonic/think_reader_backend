import createError from "http-errors"
import { addInterest,deleteInterest,getInterest,updateInterest} from "../db/controller/interest"





const addInterestService = async (req: any, res: any, next: any) => {

    try {
        const data=await addInterest(req.body);
     
        return res.status(200).send({"data":data,  });

    } catch (error) {
        next(error);
    }
}





const getInterestService = async (req: any, res: any, next: any) => {


    try {
     const data=await getInterest()
        return res.status(200).send({"data": data,  });
     


    } catch (error) {
        next(error);
    }
}




const updateInterestService = async (req: any, res: any, next: any) => {


    try {
     const data=await updateInterest(req.params.id)
        return res.status(200).send({"data": data,  });
     


    } catch (error) {
        next(error);
    }
}


const deleteInterestService = async (req: any, res: any, next: any) => {


    try {
        const data=await deleteInterest(req.params.id)
        return res.status(200).send({"msg": "Interest Deleted Successfully",  });
     


    } catch (error) {
        next(error);
    }
}


export {
   addInterestService,deleteInterestService,getInterestService,updateInterestService
}