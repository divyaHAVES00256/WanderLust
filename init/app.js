const mongoose = require("mongoose");
const Listing = require("../models/listing.js"); //require Listing model from models folder
const seedListings = require("./init.js"); //require data from init.js

main().then(() => {
    console.log("Connected to mongoose")
}).catch(e => {
    console.log("Error connecting to mongoose:", e);
});
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

async function seedDB() {
  await Listing.deleteMany({});
  await Listing.insertMany(seedListings);
  console.log("Database seeded with 10 listings");
}

seedDB(); // Run only once for seeding; remove or comment after running once
