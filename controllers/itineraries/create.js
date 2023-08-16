import Itinerary from "../../models/Itinerary.js"

export default async (req, res) => {
    
    try {
        let newItinerary = await Itinerary.create(req.body)
        return res.status(201).json({
            success: true,
            message: 'itinerary created',
            response: newItinerary._id
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not created',
            response: null
        })
    }
}