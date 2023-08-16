import Activity from "../../models/Activity.js";

export default async (req,res) => {
    try {
        let oneActivity = await Activity.findOne({ _id:req.params.user_id })        //busca segun el objeto de condiciones (en este caso le paso el id, podria pasarle el mail, el nombre, etc)
        //let oneUserId = await User.findById(req.params.user_id)           //busca solo por id
        return res.status(200).json({
            success: true,
            message: 'activity found',
            response: oneActivity
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not found',
            response: null
        })
    }
}