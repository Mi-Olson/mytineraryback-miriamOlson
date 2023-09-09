import joi from "joi";

let registerSchema = joi.object({
    name: joi.string().required().min(3).max(20).messages({
        'string.min': "name must have at least 3 characters please!",
        "string.max": "name must be less than 21 characters please!",
        "any.required": "name is required", //para cuando NO se envía el dato
        "string.empty": "name is required"  //para cuando se envía VACÍO
    }),
    mail: joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: joi.string().required(),
    country: joi.string().required(),
    lastName: joi.string().min(3).max(20).empty("").messages({
        'string.min': "last name must have at least 3 characters please!",
        "string.max": "last name must be less than 21 characters please!",
    })
})

export default registerSchema