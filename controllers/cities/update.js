import City from "../../models/City.js";

export default async (req,res,next)=> {
    try {
        let updatedCity = await City.findByIdAndUpdate(
            req.params.u_id,
            req.body,
            { new:true }    //por default en FALSE y devuelve el objeto ANTES de la modificación
            //si lo cambio a TRUE devuelve el objeto LUEGO de la modificaicón
        ).select('name photo mail')
        if (updatedCity) {
        return res.status(200).json({
            success: true,
            message: 'city updated',
            response: updatedCity
        })}
        else{
            return res.status(400).json({
                success: false,
                message: 'not found',
                response: null
            })

        }
    } catch (error) {
        next(error)
    }
}