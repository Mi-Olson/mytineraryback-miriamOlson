import Itinerary from "../../models/Itinerary.js";

export default async (req,res) => {
    try {
        let oneItinerary = await Itinerary.findOne({ _id:req.params.user_id })        //busca segun el objeto de condiciones (en este caso le paso el id, podria pasarle el mail, el nombre, etc)
       
        return res.status(200).json({
            success: true,
            message: 'itinerary found',
            response: oneItinerary
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not found',
            response: null
        })
    }
}