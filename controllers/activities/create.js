import Activity from "../../models/Activity.js"

export default async (req, res) => {
    
    try {
        let newActivity = await Activity.create(req.body)
        return res.status(201).json({
            success: true,
            message: 'activity created',
            response: newUser._id
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not created',
            response: null
        })
    }
}