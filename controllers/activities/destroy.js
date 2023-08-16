import Activity from "../../models/Activity.js";

export default async (req,res)=> {
    try {
        let deletedActivity = await Activity.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success: true,
            message: 'activity deleted',
            response: deletedActivity._id
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not deleted',
            response: null
        })
    }
}