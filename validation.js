const joi = require('joi')

const registerValidation = (data)=>{
    const schema = joi.object({
        name : joi.string().required().min(2).max(7),
        email : joi.string().required().email(),
        password: joi.string().required().min(5).max(8),
        mobile : joi.number().integer().min(10000000).max(9999999999).required()
    })
    return schema.validate(data)
}


   const loginValidate = (data)=>{
    const schema = joi.object({
        password : joi.string().required().min(2).max(7),
        email : joi.string().required().email(),
    })
    return schema.validate(data)
   }




module.exports.registerValidation = registerValidation;
module.exports.loginValidate = loginValidate;