//listing model express route
const express = require("express");
const router = express.Router();
const multer  = require('multer');
const {storage, cloudinary} = require("../cloudConfig.js"); //require cloudinary config
const upload = multer({storage});
const wrapAsync = require("../util/wrapAsync.js"); //require wrapAsync for async error hanling
const validateListing = require("../middleware/validateListing.js"); //middleware for listing validation (joi `//schema validation)
const { isLoggedIn, isOwner } = require("../middleware/loggedIN.js");
const {
    index, 
    renderNewForm, 
    createListing, 
    showListing, 
    renderEditForm, 
    editListing, 
    destroyListing
} = require("../controllers/listing.js"); //require listing controllers


//CRUD for listings
// "/listings"

// 1 Index - show all listings
router.get("/", wrapAsync(index));

// 2 New - show form to create new listing
router.get("/new", isLoggedIn, renderNewForm);

router.post("/", isLoggedIn, upload.single('listing[images]'), validateListing, wrapAsync(createListing));

// 3 Show - show details for one listing
router.get("/:id", wrapAsync(showListing));

//4  Edit - show form to edit listing
router.get("/edit/:id", isLoggedIn, isOwner, renderEditForm);

router.put("/:id", isLoggedIn, isOwner, upload.single('listing[images]'), validateListing, wrapAsync(editListing));

// 5 Delete - delete a particular listing
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(destroyListing));

//export router
module.exports = router;
