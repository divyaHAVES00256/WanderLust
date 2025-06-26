const {reviewSchema} = require("../schema.js"); //joi - review schema validator
const ExpressError = require("../util/ExpressError.js"); //require ExpressError for error hanling

// use joi for the validation of review schema
const validateReview = (req, res, next) => {
    let {error} = reviewSchema.validate(req.body); // should use reviewSchema
    if(error) {
        console.log("Review validation error : ", error);
        let errMsg = error.details.map(e => e.message).join(", ");
        throw new ExpressError(400, errMsg);
    } else{ 
        next();
    }
}

module.exports = validateReview;