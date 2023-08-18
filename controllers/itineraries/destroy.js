import Itinerary from "../../models/Itinerary.js"

export default async (req,res)=> {
    try {
        let deletedItinerary = await Itinerary.findByIdAndDelete(req.params.id)
        if(deletedItinerary){
        return res.status(200).json({
            success: true,
            message: 'user itinerary',
            response: deletedItinerary._id
        })}
        else{
            return res.status(404).json({
                success: false,
                message: 'not found',
                response: null
            })    
        }
    } catch (error) {
        next(error)
    }
}