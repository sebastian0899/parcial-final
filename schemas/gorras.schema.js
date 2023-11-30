const Joi = require('joi');

const id = Joi.number()
const marca = Joi.string().min(2).max(255)
const color = Joi.string().min(2).max(255)
const precio = Joi.number()
const talla = Joi.number()
const email=Joi.string().min(5).max(255)

const createGorraSchema = Joi.object({
    marca: marca.required(),
    color: color.required(),
    precio: precio.required(),
    talla: talla.required(),
    email: email.required(),
    
});

const updateGorraSchema = Joi.object({
    marca: marca.optional(),
    color: color.optional(),
    precio: precio.optional(),
    talla: talla.optional(),
    email: email.optional(),
});

const getGorraSchema = Joi.object({
    id: id.required()
});

module.exports = {
    createGorraSchema,
    updateGorraSchema,
    getGorraSchema 
}