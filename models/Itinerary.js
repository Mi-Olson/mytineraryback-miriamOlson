import { model, Schema, Types } from "mongoose";



let collection = 'itineraries'
let schema = new Schema({
    name: { type: String, required: true },
    city_id: { type:  Types.ObjectId, required: true ,ref:'cities'},
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    tags: [
        {

            required: true,
            type: String,
            default:"#"


        }
    ],

    photo: { type: String, default: "'https://www.southluangwasafaris.com/wp-content/uploads/2018/04/livadv_2013-03-207.x89638.jpg'" }



})
let Itinerary = model(collection, schema)
export default Itinerary