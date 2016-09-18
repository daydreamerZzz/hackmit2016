var signInButton = document.getElementById('sign-in-button');


window.addEventListener('load', function() {
    signInButton.addEventListener('click', function() {
	console.log("hello");
	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider).then(function(result){
	    var uid_short = result.user.uid.slice(0,8);
	    console.log(uid_short);
	    console.log(result);
	    window.location.href = '/user/' + uid_short + '.html';
	});
    });
});
