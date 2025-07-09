**WANDERLUST** - An Airbnb Clone (Work in Progress)
🌍 Explore the World, One Journey at a Time
Wanderlust is your ultimate companion for discovering, planning, and sharing your travel adventures. This project is currently an Airbnb clone, with ongoing development to enhance features and scalability.

✨ **Features**
Destination & Listing Management: Explore and manage a database of global destinations/listings with descriptions and photos.

Personalized Itinerary Planning: Create detailed day-by-day itineraries for your trips.

Travel Journal & Photo Gallery: Document experiences and upload photos.

User Authentication: Secure user registration and login.

Image Uploads: Easily upload and manage images.

Community & Sharing: Connect with other travelers and share itineraries.

🚀 **Technologies Used**

Frontend:`Bootstrap`, `CSS`, `JavaScript (ES6+)`

Backend: `Node.js` with `Express.js`, `MongoDB` (`Mongoose`), `EJS`, `Cloudinary` (image storage), `Passport.js` (authentication)

Other Tools: `Git` & `GitHub`, `dotenv`, `connect-flash`, `express-session`, `joi`, `multer`

🛠️ Setup and Installation
Follow these steps to get Wanderlust running locally:

1. Clone the repository:

   `git clone [https://github.com/your-username/wanderlust.git](https://github.com/your-username/wanderlust.git)
cd wanderlust`
2. Install dependencies:

   ```bash
   cd frontend && npm install  # Or yarn install
   cd ../backend && npm install # Or yarn install
   
3. Configure environment variables:

Create a `.env` file in your `backend` directory.

Add your database connection string, API keys (Mapbox/Google Maps, Cloudinary), and a session secret.

   ```bash
   DB_URI=your_mongodb_connection_string
   MAPBOX_API_KEY=your_mapbox_api_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   SESSION_SECRET=a_long_random_string_for_session_secret


4. **Run the application:**

Start backend: `cd backend && npm start`

Start frontend: `cd ../frontend && npm start`

Access the application at `http://localhost:8080`.

💡 **Usage**

Sign Up/Log In: Create an account or log in.

Discover: Explore destinations and listings.

Plan & Build: Create trips, itineraries, and journal entries.

Visualize: View plans on the interactive map.

🔄 **Future Enhancements (Work in Progress)**

We are actively working on:

Advanced Filtering: Implementing robust search and filtering options for destinations/listings.

Scalability Improvements: Optimizing the application to handle a larger number of users and data.

Further feature development based on user feedback.

🤝 **Contributing**
We welcome contributions! Please fork the repository, create a branch, make your changes, and open a Pull Request.

📧 **Contact**
For any questions, reach out to:

Your Name: (https://github.com/divyaHAVES00256) / divyansut00256@gmail.com
