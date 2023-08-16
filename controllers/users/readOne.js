import User from "../../models/User.js";

export default async (req,res) => {
    try {
        let oneUser = await User.findOne({ _id:req.params.user_id })        //busca segun el objeto de condiciones (en este caso le paso el id, podria pasarle el mail, el nombre, etc)
        //let oneUserId = await User.findById(req.params.user_id)           //busca solo por id
        return res.status(200).json({
            success: true,
            message: 'users found',
            response: oneUser
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not found',
            response: null
        })
    }
}