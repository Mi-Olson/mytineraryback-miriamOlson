import City from "../../models/City.js";

export default async (req,res,next) => {
    
    try {
        console.log(req.query);   //QUERY ES UN OBJETO CON TODAS LAS CONSULTAS/IGUALDADES A BUSCAR EN LA BASE DE DATOS
        //let objetoDeBusqueda = { admin_id:'64d641453319242989c30fce' } //para el ejemplo ES IGUAL a req.query
        let objectSearch = {}
        let objectSort = {}
        let pagination={page:1,limit:20}
        if(req.query.page){
            pagination.page=req.query.page
        }
        if(req.query.limit){
            pagination.limit=req.query.limit
        }
        if (req.query.admin_id) {
            objectSearch.admin_id = req.query.admin_id
        }
        if (req.query.city) {
            objectSearch.city =new RegExp('^' + req.query.city, 'i'); 
            //new RegExp(req.query.title,'i')
        }
        if (req.query.sort) {
            objectSort.city = req.query.sort
            //agrego la propiedad por la cual QUIERO ORDENAR
            //si es 1 ordena ascendentemente
            //si es -1 ordena descendentemente
        }
        let allCities = await City
            .find(objectSearch,'country city photo smalldescription admin_id')
            .populate('admin_id','photo name mail -_id')
            .sort(objectSort)
            .skip(pagination.page > 0 ?(pagination.page-1)*pagination.limit:0)
            .limit(pagination.limit >0 ? pagination.limit : 0)
        //let allCities = await City.find().select('country city photo smalldescription admin_id').populate('admin_id','photo name mail -_id')
        
        let count_total=await City.estimatedDocumentCount()
        let count=await City.countDocuments(objectSearch)
        if (allCities.length>0) {
            return res.status(200).json({
                success: true,
                message: 'cities found',
                response: allCities,count,count_total
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