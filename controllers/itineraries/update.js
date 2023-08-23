import Itinerary from "../../models/Itinerary.js";

export default async (req,res,next)=> {
    try {
        let updatedItinerary = await Itinerary.findByIdAndUpdate(
            req.params.u_id,
            req.body,
            { new:true }    //por default en FALSE y devuelve el objeto ANTES de la modificación
            //si lo cambio a TRUE devuelve el objeto LUEGO de la modificaicón
        ).select('name photo ')
        if(updatedItinerary){
        return res.status(200).json({
            success: true,
            message: 'itinerary updated',
            response: updatedItinerary
        })}
        else{
            return res.status(400).json({
                success: false,
                message: 'not updated',
                response: null
            })
        }
    } catch (error) {
       next(error)
    }
}