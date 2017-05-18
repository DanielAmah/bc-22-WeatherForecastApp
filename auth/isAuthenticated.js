var firebase = require("firebase");
module.exports = function(req, re, next) {
    var checkLogin = firebase.auth().currentUser;
    if (checkedLogin) {
        return next();
    } else {
        res.redirect('login.html');
    }
};