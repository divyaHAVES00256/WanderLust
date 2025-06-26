const Listing = require("../models/listing");
const Review = require("../models/review");


const isLoggedIn = (req, res, next) => {
  
  if (!req.isAuthenticated()) {
      
    if (req.method === "GET") {
      req.session.returnTo = req.originalUrl;
    }
    
    req.flash("error", "You must be logged in to make changes!");
    return res.redirect("/users/login");
  }
  next();
};

const saveReturnTo = (req, res, next) => {
  if (req.session.returnTo) {
    res.locals.returnTo = req.session.returnTo;
  }
  next();
};

const isOwner = async (req, res, next) =>{
  let id = req.params.id;
  let listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  if (!req.user || !listing.owner || !listing.owner.equals(req.user._id)) {
    req.flash("error", "You do not have permission to edit/delete this listing!");
    return res.redirect(`/listings/${id}`);
  }
  next();
  
}
const isAuthor = async (req, res, next) => {
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (!review) {
    req.flash("error", "Review not found!");
    return res.redirect(`/listings/${id}`);
  }
  if (!review.author || !review.author.equals(req.user._id)) {
    req.flash("error", "You do not have permission to delete this review!");
    return res.redirect(`/listings/${id}`);
  }
  next();
};
module.exports = { isLoggedIn, saveReturnTo , isOwner, isAuthor };