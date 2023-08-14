import {model,Schema,Types} from "mongoose";



let collection ='activities'
let schema= new Schema({
    
    name: {type:String,required:true},
    photo:{type:String,default:"https://ychef.files.bbci.co.uk/976x549/p014n0rg.jpg"},
    itinerary_id: {type: Types.ObjectId,required:true, ref:'itineraries'}

})
let Activity=model(collection,schema)
export default Activity