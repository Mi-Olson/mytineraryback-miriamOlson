
import { hashSync } from 'bcrypt'


export default (req,res,next)=> {
    try {
        let hashPassword = hashSync(req.body.password,5)//el numero puede ir de 5 a 10 (es la complejidad de la passord)
        req.body.password = hashPassword
        return next()
    } catch (error) {
        return next(error)
    }
}