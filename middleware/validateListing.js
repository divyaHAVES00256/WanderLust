const {listingSchema} = require("../schema.js"); //joi - listing schema validator
const ExpressError = require("../util/ExpressError.js"); //require ExpressError for error hanling

// use joi for the validation of listing schema
const validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body); // should use listingSchema
    if(error) {
        console.log("Listing validation error : ", error);

        let errMsg = error.details.map(e => e.message).join(", ");
        throw new ExpressError(400, errMsg);
    } else{ 
        next();
    }
}

module.exports = validateListing;