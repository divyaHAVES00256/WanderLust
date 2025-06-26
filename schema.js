// schema validator - listing schema
const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().strict()
        .required()
        .messages({
        "string.pattern.base": "Title must only contain letters and spaces."
        }),
    
        description: Joi.string()
            .required(),
        
        images: Joi.string()
            .allow("", null),

        price: Joi.number()
            .required(),
        
        location: Joi.string()
            .required()
            .min(0),

        country: Joi.string()
            .required(),
        }).required() 
});


// schema validator - review schema
module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number()
        .min(1)
        .max(10)
        .required(),
    
        comment: Joi.string()
            .required(),
        
    }).required()
});