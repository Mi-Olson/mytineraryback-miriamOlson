import Itinerary from "../../models/Itinerary.js";

export default async (req,res)=> {
    try {
        let updatedItinerary = await Itinerary.findByIdAndUpdate(
            req.params.u_id,
            req.body,
            { new:true }    //por default en FALSE y devuelve el objeto ANTES de la modificación
            //si lo cambio a TRUE devuelve el objeto LUEGO de la modificaicón
        ).select('name photo ')
        return res.status(200).json({
            success: true,
            message: 'itinerary updated',
            response: updatedUser
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not updated',
            response: null
        })
    }
}