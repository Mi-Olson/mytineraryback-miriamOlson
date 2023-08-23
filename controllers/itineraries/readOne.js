import Itinerary from "../../models/Itinerary.js";

export default async (req,res,next) => {
    try {
        let oneItinerary = await Itinerary.findOne({ _id:req.params.itineraries_id })        //busca segun el objeto de condiciones (en este caso le paso el id, podria pasarle el mail, el nombre, etc)
        if(oneItinerary){
        return res.status(200).json({
            success: true,
            message: 'itinerary found',
            response: oneItinerary
        })}
        else{
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