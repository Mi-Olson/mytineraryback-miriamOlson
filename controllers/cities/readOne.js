import City from "../../models/City.js";

export default async (req,res,next) => {
    try {
        let oneCity = await City.findOne({ _id:req.params.city_id })        //busca segun el objeto de condiciones (en este caso le paso el id, podria pasarle el mail, el nombre, etc)
        //let oneUserId = await User.findById(req.params.user_id)           //busca solo por id
         if  (oneCity){     
        return res.status(200).json({
            success: true,
            message: 'city found',
            response: oneCity
        })}else{
            return res.status(404).json({
                success: false,
                message: 'not found',
                response: null
            }) 
        }
    } catch (error) {
        next(error)
    }
}