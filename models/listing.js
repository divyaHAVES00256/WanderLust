// models/istingSchema.js
const mongoose = require('mongoose');
const Review = require("./review.js"); // Import the Review model
const User = require("./user.js"); // Import the Review model


const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  images: {
    url: String,
    filename: String,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
  },
  country: {
    type: String,
    required: true,
  },
  //review model defined in review.js
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review', // Reference to the Review model
    }
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // Reference to the User model
    
  }
});

//Post middleware for cascade delete (listing and reviews)
listingSchema.post("findOneAndDelete", async(review)=>{
    console.log("Post middleware called for review deletion of listing");
    console.log(review); 
    
    //if reviews exist, delete them
    if(review.reviews.length > 0){
        await Review.deleteMany({
            _id: {
                $in: review.reviews
            }
        });
    } else {
        console.log("No reviews to delete for this listing");
    }
})

//Listing model
module.exports = mongoose.model('Listing', listingSchema);
 