var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

module.exports = router;


/*
var signInButton = document.getElementById('sign-in-button');
window.addEventListener('load', function() {
    signInButton.addEventListener('click', function() {
	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider).then(function(result){
	    console.log("yo");
	});
    });

});
*/
