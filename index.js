if(process.env.NODE_ENV != "production"){
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const path = require("path");
const ExpressError = require("./util/ExpressError");

const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./models/user");

const listing = require("./routes/listing");
const review = require("./routes/review");
const user = require("./routes/user");

// view engine setup
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// mongoose connection
const dbUrl = process.env.ATLASDB_URL;

async function main() {
  await mongoose.connect(dbUrl);
}
main()
  .then(() => console.log("Connected to mongoose"))
  .catch(err => console.log("Error connecting to mongoose:", err));


// connect-mongo for session storage
const store = MongoStore.create({
  mongoUrl: dbUrl,
  touchAfter: 24 * 3600, // time in seconds
  crypto: {
    secret : process.env.SECRET ,
  }
});
store.on("error", function (e) {
  console.log("Session store error", e);  
});


// session and flash setup
const sessionOptions = {
  store: store,
  secret: process.env.SECRET ,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    httpOnly: true,
    secure: false,
    sameSite: "lax"
  }
};


// session and flash middleware
app.use(session(sessionOptions));
app.use(flash());

// passport setup (authentication middleware)
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser()); //store in session
passport.deserializeUser(User.deserializeUser()); //retrieve from session

// flash middleware
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user; // current user for templates
  next();
});

// routes
app.get("/", (req, res) => {
  res.redirect("/listings");
});
app.use("/listings", listing);
app.use("/listings/:id/reviews", review);
app.use("/users", user);

// 404 handler
app.all(/^\/.*/, (req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});

// error handler - mongoose specific
app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    err.status = 401;
    err.message = Object.values(err.errors).map(e => e.message).join(", ");
  }
  if (err.name === "CastError") {
    err.status = 404;
    err.message = "Invalid ID format";
  }
  next(err);
});

// final error handler
app.use((err, req, res, next) => {
  const { status = 400, message = "Something went wrong" } = err;
  res.status(status).render("listings/error", { err });
});

app.listen(8080, () => {
  console.log("Port 8080 is listening");
});
