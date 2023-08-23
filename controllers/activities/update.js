import Activity from "../../models/Activity.js";

export default async (req,res,next)=> {
    try {
        let updatedActivity = await Activity.findByIdAndUpdate(
            req.params.u_id,
            req.body,
            { new:true }    //por default en FALSE y devuelve el objeto ANTES de la modificación
            //si lo cambio a TRUE devuelve el objeto LUEGO de la modificación
        ).select('name photo mail')
        if(updatedActivity){
        return res.status(200).json({
            success: true,
            message: 'activity updated',
            response: updatedActivity
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