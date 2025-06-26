const Listing = require("../models/listing.js") //require Listing model
const Review = require("../models/review.js"); //require review model

const createReview = (
    async (req, res, next) => {
        //find the reviwer 
        let listing = await Listing.findById(req.params.id);

        //create review
        let review = new Review(req.body.review);
        review.author = req.user._id; //assign author to the rebiew
        //push review in listing
        listing.reviews.push(review); //push in review array field of listing 
        await review.save();
        await listing.save();

        req.flash("success", "New review created successfully!"); 
        res.redirect(`/listings/${listing._id}`); //redirect review data to show page/ where listing now have reviews
    }
);

const destroyReview = (
    async (req, res, next) => {
        let {id, reviewId} = req.params;

        await Listing.findByIdAndUpdate(id, {$pull:{reviews: reviewId}}); //remove review from listing collection
        await Review.findByIdAndDelete(reviewId); //delete review from review collection

         req.flash("success", "Review deleted successfully!"); 
        res.redirect(`/listings/${id}`); //redirect review data to show page/ where listing now have reviews
    }
)

module.exports = {createReview, destroyReview}; //export functions