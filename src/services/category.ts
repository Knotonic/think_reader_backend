import createError from "http-errors"
import { addcategory,deletecategory,getcategory,updatecategory} from "../db/controller/category"





const addCategoryService = async (req: any, res: any, next: any) => {

    try {
        const data=await addcategory(req.body);
     
        return res.status(200).send({"data":data,  });

    } catch (error) {
        next(error);
    }
}





const getCategoryService = async (req: any, res: any, next: any) => {


    try {
     const data=await getcategory()
        return res.status(200).send({"data": data,  });
     


    } catch (error) {
        next(error);
    }
}




const updateCategoryService = async (req: any, res: any, next: any) => {


    try {
     const data=await updatecategory(req.params.id)
        return res.status(200).send({"data": data,  });
     


    } catch (error) {
        next(error);
    }
}


const deleteCategoryService = async (req: any, res: any, next: any) => {


    try {
        const data=await deletecategory(req.params.id)
        return res.status(200).send({"msg": "Category Deleted Successfully",  });
     


    } catch (error) {
        next(error);
    }
}


export {
   addCategoryService,deleteCategoryService,getCategoryService,updateCategoryService
}