import joi from "joi";

let registerSchema = joi.object({
    name: joi.string().required().min(3).max(20).empty("").messages({
        'string.min': "name must have at least 3 characters please!",
        "string.max": "name must be less than 21 characters please!",
        "any.required": "name is required", //para cuando NO se envía el dato
        "string.empty": "name is required"  //para cuando se envía VACÍO
    }),
    mail: joi.string().required().min(3).max(20).empty("").email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).messages({
        'string.min': "mail must have at least 3 characters please!",
        "string.max": "mail must be less than 21 characters please!",
        "string.email": "email email must contain extension .com or .net please!",
        "any.required": "email is required", //para cuando NO se envía el dato
        "string.empty": "email is required"  //para cuando se envía VACÍO
    }),
    password: joi.string().required().min(3).max(10).empty("").messages({
        'string.min': "password must have at least 3 characters please!",
        "string.max": "password must be less than 10 characters please!",
        "any.required": "password is required", //para cuando NO se envía el dato
        "string.empty": "password is required"}),

    country: joi.string().required().min(3).max(20).empty("").messages({
        'string.min': "country must have at least 3 characters please!",
        "string.max": "country must be less than 21 characters please!",
        "any.required": "country is required", //para cuando NO se envía el dato
        "string.empty": "country is required"
    }),
    lastName: joi.string().required().min(3).max(20).empty("").messages({
        'string.min': "last name must have at least 3 characters please!",
        "string.max": "last name must be less than 21 characters please!",
        "any.required": "country is required", //para cuando NO se envía el dato
        "string.empty": "country is required"
    })
})

export default registerSchema