# 🌍 WANDERLUST — An Airbnb Clone *(Work in Progress)*  
_Explore the World, One Journey at a Time_

![GitHub Repo Stars](https://img.shields.io/github/stars/divyaHAVES00256/wanderlust?style=social)
![GitHub forks](https://img.shields.io/github/forks/divyaHAVES00256/wanderlust?style=social)
![GitHub last commit](https://img.shields.io/github/last-commit/divyaHAVES00256/wanderlust)
![License](https://img.shields.io/badge/license-MIT-green)

---

## ✨ Features

- 🗺️ **Destination & Listing Management** — Browse global listings with descriptions & photos  
- 📝 **Personalized Itinerary Planning** — Create detailed, day-by-day travel itineraries  
- 📸 **Travel Journal & Gallery** — Document your experiences and upload images  
- 🔐 **User Authentication** — Secure registration and login using Passport.js  
- ☁️ **Image Uploads** — Easily upload and manage travel photos via Cloudinary  
- 🌐 **Community & Sharing** — Share your adventures and connect with fellow travelers  

---

## 🚀 Technologies Used

### 💻 Frontend  
`Bootstrap`, `CSS`, `JavaScript (ES6+)`

### 🔧 Backend  
`Node.js` with `Express.js`, `MongoDB` (`Mongoose`), `EJS`, `Cloudinary` (image storage), `Passport.js` (authentication)

### 🛠️ Other Tools  
`Git` & `GitHub`, `dotenv`, `connect-flash`, `express-session`, `joi`, `multer`

---

## ⚙️ Setup and Installation

Follow these steps to get Wanderlust running locally:

### 1. Clone the Repository

```bash
git clone https://github.com/divyaHAVES00256/wanderlust.git
cd wanderlust
2. Install Dependencies
bash
Copy
Edit
cd frontend && npm install   # Or yarn install
cd ../backend && npm install # Or yarn install
3. Configure Environment Variables
Create a .env file in the backend directory:

env
Copy
Edit
DB_URI=your_mongodb_connection_string
MAPBOX_API_KEY=your_mapbox_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
SESSION_SECRET=a_long_random_string_for_session_secret
4. Run the Application
bash
Copy
Edit
cd backend && npm start
bash
Copy
Edit
# In a new terminal window/tab:
cd frontend && npm start
Access the app at: http://localhost:8080

💡 Usage
🔑 Sign Up / Log In — Create an account or sign in

🌍 Discover — Browse destinations and listings

🗓️ Plan & Build — Organize trips, create itineraries & journal entries

🗺️ Visualize — View plans on an interactive map

🔄 Future Enhancements
We’re actively working on:

🔍 Advanced Filtering — Robust filters for listings and destinations

🚀 Scalability Improvements — Optimize performance and handle more users

💬 User-Driven Features — Feedback-based iteration and new tools

🤝 Contributing
We welcome all contributions!

bash
Copy
Edit
# Fork the repo
# Create a feature branch
# Make your changes
# Open a Pull Request
📧 Contact
Divyanshu Tiwari
🔗 GitHub Profile
📩 divyansut00256@gmail.com
