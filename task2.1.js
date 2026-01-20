let isLoggedIn = true;
let isProfileComplete = false;

let message;
// If user is not logged in → show "Please login"
if (!isLoggedIn) {
    message = "please login";
}
//  If logged in but profile incomplete → show "Complete your profile"
else if (!isProfileComplete) {
    message = "complete your profile";
}
// If logged in and profile complete → show "Welcome back!"
else {
    message = "welcome back";
}
//  Print the message
console.log( message);