const Listing = require("../models/listing");
const mongoose = require("mongoose"); //require mongoose
const ExpressError = require("../util/ExpressError.js"); //require ExpressError for error hanling

const index = (
    async (req, res, next) => {
        let listings = await Listing.find({}); 
        res.render("listings/index.ejs", {listings});
    }
) ;

const renderNewForm = (req, res)=>{
    res.render("listings/create.ejs")
};
const createListing = (
    async (req, res, next) => {
        let url = req.file.path; //get the image url from cloudinary
        let filename = req.file.filename; //get the image filename from cloudinary

        let newlist = new Listing(req.body.listing); //we created listing object in create to get the data in object fromat
        newlist.owner = req.user._id; //assign owner to the listing
        newlist.images = {url, filename}; //assign image url and filename to the listing
        await newlist.save();
        req.flash("success", "New listing created successfully!"); //flash message for success
        res.redirect("/listings");
    }
);

const showListing = (
    async (req, res, next) => {
        let id = req.params.id;
        console.log(req.user); //check current user

        // Validate ObjectId \\write it before finding or mongoose caste error will be thrown
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(new ExpressError(400, "Invalid ID format for show"));
        }
        
        //find by id
        let listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author", //nested populate author field in review
            } 
        })//populate reviews field in listing
        .populate("owner"); //populate owner field in listing

         //valiation error hanling
         if (!listing){
            req.flash("error", "Listing not found!"); //flash message for error
            return res.redirect("/listings");
            // return next(new ExpressError(404, "custom error: listing not found"));
        }

        //check listing
        res.render("listings/show.ejs", {listing});
    }
);

const renderEditForm = async(req, res, next) => {
    let id = req.params.id;
    let listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing not found!"); //flash message for error
        return res.redirect("/listings");
    }
    let originalImage = listing.images.url; 
    
    originalImage = originalImage.replace("/upload", "/upload/c_scale,w_250"); //scale the image to 500px width for better view in edit form
    
    res.render("listings/edit.ejs", {listing, originalImage}); 
};
const editListing = (
    async(req, res, next) =>{
        let id = req.params.id;

        // Validate ObjectId
        let updatedListing = await Listing.findById(id);

        //validation error handling
        if (!updatedListing){
            return next(new ExpressError(404, "custom error: listing not found"));
        }  

        //update listing
        updatedListing.set(req.body.listing); //set the new data to the listing
        console.log(typeof req.file); //check if file is uploaded
        if (req.file) {
            updatedListing.images = {
                url: req.file.path,      // Save the image URL from cloud storage
                filename: req.file.filename // Save the image filename from cloud storage
            };
        }

        await updatedListing.save(); //save the updated listing
        req.flash("success", "Updated successfully!"); //flash message for success
        res.redirect(`/listings/${id}`);
    }
);

const destroyListing = (
    async(req, res, next) => {
        let id = req.params.id;
        await Listing.findByIdAndDelete(req.params.id);
        req.flash("success", "Deleted successfully!"); //flash message for success
        res.redirect("/listings");
    }
)

module.exports = {index, renderNewForm, createListing, showListing, renderEditForm, editListing, destroyListing};