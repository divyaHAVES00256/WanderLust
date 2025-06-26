const User = require("../models/user.js");

const renderSignUpForm = (
    async (req, res, next) => {
        res.render("users/signup.ejs");
    }
);
const signUpUser = (
    async(req, res, next)=>{
        try {
            let {username, email, password} = req.body.user;
            const user = new User({username, email});
            const registeredUser = await User.register(user, password); // register method from passport-local-mongoose
            req.login(registeredUser, (err) => { //post login
                if (err) {
                    return next(err);
                }
                req.flash(
                    "success",
                    "Welcome to our application, " + registeredUser.username + "!"
                );
                res.redirect("/listings");
            });
        } catch (e) {
            req.flash("error", e.message);
            res.redirect("/users/signup");
        }
        
    }
);

const renderLoginForm = (
    async (req, res, next) => {
        res.render("users/login.ejs");
    }
);
const loginUser = async (req, res, next) => {
    req.flash(
        "success",
        "Login Successful" +  "!"
    );
    
    let redirectUrl = res.locals.returnTo || "/listings";

    // If the returnTo is a DELETE review, DELETE listing, PATCH, or PUT listing URL, redirect to the listing show page instead
    if (
        // Deleting a review
        (redirectUrl.includes("/reviews/") && redirectUrl.includes("_method=DELETE")) ||
        // Deleting a listing
        (redirectUrl.includes("_method=DELETE") && !redirectUrl.includes("/reviews/")) ||
        // Editing a listing (PATCH or PUT)
        redirectUrl.includes("_method=PATCH") ||
        redirectUrl.includes("_method=PUT")
    ) {
        // Extract the listing id from the URL
        const match = redirectUrl.match(/\/listings\/([^\/]+)/);
        if (match) {
            redirectUrl = `/listings/${match[1]}`;
        } else {
            redirectUrl = "/listings";
        }
    }
    res.redirect(redirectUrl);
};

const logOutUser = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "Logged out successfully!");
        res.redirect("/listings");
    });
};
module.exports = {
    renderSignUpForm,
    signUpUser,
    renderLoginForm,
    loginUser,
    logOutUser
};