define(function(require) {
	var $ = require('jquery');
	var Firebase = require('firebase');

	/* end define statement */

	var loginRef = new Firebase('https://local-weather-mk.firebaseIO.com');

	return {
		/*
		loginUser uses Firebase native authentication
		 */
		loginUser: function(email, password) {

			var loginForm = {
				email: $('#loginEmail').val(),
				password: $('#loginPassword').val()
			};

			loginRef.authWithPassword(loginForm, function(error, authData) {
				if (error) {
					console.log('Login failed!', error);
				}
				else {
					$('#navigation').show();
					$('#panelContainer').hide();
					// console.log('Authenticated succesfully with payload!', authData);
				}

			});
		},
		/*
		registerUser uses Firebase native authentication
		 */
		registerUser: function() {
			ref.createUser({
  				email    : $('#email').val(),
  				password : $('#password').val()
				}, function(error, userData) {
  				if (error) {
    				console.log("Error creating user:", error);
  			} else {
    			console.log("Successfully created user account with uid:", userData.uid);
  			}
			});
		}
	};
});