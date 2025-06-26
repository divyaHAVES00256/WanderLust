const express = require("express");
const router = express.Router();
const wrapAsync = require("../util/wrapAsync.js"); 
const passport = require("passport");
const { saveReturnTo } = require("../middleware/loggedIN.js");
const {
    renderSignUpForm, 
    signUpUser, 
    renderLoginForm, 
    loginUser, 
    logOutUser
 } = require("../controllers/user.js");

//signup
router.get("/signup",wrapAsync(renderSignUpForm));

router.post("/signup", wrapAsync(signUpUser));

//login (authenticate here using passport-local mw)
router.get("/login", wrapAsync(renderLoginForm));
router.post("/login", saveReturnTo, passport.authenticate(
    "local", 
    {
        failureRedirect: "/users/login",
        failureFlash: true,
        successFlash: "Welcome back!"
    }
), loginUser);

//logout
router.get("/logout", logOutUser);

module.exports = router;
