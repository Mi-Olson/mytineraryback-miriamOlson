import Itinerary from "../../models/Itinerary.js";

export default async (req, res,next) => {

    try {
       
        let objectSearch = {}
        let objectSort = {}
        if (req.query.admin_id) {
            objectSearch.admin_id = req.query.admin_id
        }
        if (req.query.city) {
            objectSearch.city = new RegExp(req.query.city,'i')
            //new RegExp(req.query.title,'i')
        }
        if (req.query.sort) {
            objectSort.city = req.query.sort
            
        }
        let allItineraries = await Itinerary
            .find(objectSearch,'name price duration photo city_id')
            .populate('city_id','photo city smalldescription -_id')
            .sort(objectSort)
       
        if (allItineraries.length>0) {
            return res.status(200).json({
                success: true,
                message: 'itinerary found',
                response: allItineraries
            })
        } else {
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