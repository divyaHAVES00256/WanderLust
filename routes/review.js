//review model express route
const express = require("express");
const router = express.Router({ mergeParams: true }); //mergeParams to access params from parent route
const wrapAsync = require("../util/wrapAsync.js"); //require wrapAsync for async error hanling
const validateReview = require("../middleware/validateReview.js"); //middleware for listing validation (joi `//schema validation)
const {isLoggedIn, isAuthor} = require("../middleware/loggedIN.js"); //middleware for checking if user is logged in
const {
    createReview, 
    destroyReview
} = require("../controllers/review.js"); //import review controller functions

//CRUD on review page
//show review
// "/listings/:id/reviews"

//create
router.post("/", isLoggedIn, validateReview, wrapAsync(createReview));
//delete 
router.delete("/:reviewId", isLoggedIn, isAuthor, wrapAsync(destroyReview));

//export router
module.exports = router;