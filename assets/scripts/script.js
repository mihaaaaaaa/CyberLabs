$(document).ready(function() {
	var randomNumber = Math.random();

	let userLoggedIn = null ;
	let currentUser =null;

	var newUserClassNum = ['0', '3', '7'];

	let userList = [
		{
			id: 7876,
			type:'admin',
			name: 'Anton',
			age: 29
		},
		{
			id: 3456,
			type:'user',
			name: 'Anton',
			age: 12
		},
		{
			id: '0234',
			type:'hacer',
			name: 'Anton',
			age: 7
		}
	];

	// interfaceBilder.build('login');

	console.log(userList);

	$(".js-authBtn").click(function(){
		checkPass($('.js-authInput').val());
	});

	$(".js-authInput").keydown(function(event){
    	if(event.keyCode == 13){
    	    event.preventDefault();
    	    $('.js-authBtn').click();
    	}
	});


	let userPost = null;

	function getRandomInt(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

  	function playMP3(){
		$('body').toggleClass('-visible');
		document.getElementById("CyberBananaLabs").innerHTML="Chiki Briki i v damke!";
		document.getElementById('myAudio').play();
	};

	function spellAdmin(){
		if(!confirm('Create new User?')){
			spellAdmin();
		} else {
			newUserName = prompt('NewUserName');
			newUserId = getRandomInt(100, 999);
			newUserClass = getRandomInt(0, 2);
			alert( newUserClassNum[newUserClass] + newUserId);
		};
	};

	function spellUser(){
		if(!confirm('Create new post?')){
			spellUser();
		} else {
			prompt('enter your post.');
			if(!confirm('publish post?')){
				spellUser();
			} else {
				alert('your post has been published');
			};
		};
	};

	function spellHacer(){
		alert('Danger, Russian hackers are attacking!!! Security systems are on.');
		playMP3();
	}

	function checkPass(userPass){

		for (let i = 0 ; i < userList.length; i++) {
			if (userPass == userList[i].id) {
				userLoggedIn = true ;
				currentUser = userList[i];
			};	
		};
		$('.js-authInput').focus(function(){
			$('.js-authParent').removeClass('-error');
		});

		if (!userLoggedIn) {
			$('.js-authParent').addClass('-error');
		} else {
			interfaceBilder.showMassage('Welcome on board, ' + currentUser.name);
		};

		// if (userPass == userList[0] ) {
		// 	alert('This is Admin');
		// 	userType = 'admin';
		// 	alert('Hello, Admin');
		// 	spellAdmin();
		// } else if (userPass == userList[1]) {
		// 	alert('This is User');
		// 	userType = 'User';
		// 	alert('Hello, User');
		// 	spellUser();
		// } else if (userPass == userList[2]) {
		// 	alert('This is Hacer');
		// 	userType = 'Hacer';
		// 	spellHacer();
		// }else {
		// 	alert('We don\'t have passwords like this here you scum!');
		// 	initiateLogin();
		// }
	};

	function setUserActions(){
		if (currentUser.type == 'admin' ) {
			spellAdmin();
		} else if (currentUser.type == 'user') {
			spellUser();
		} else if (currentUser.type == 'hacer') {
			spellHacer();
		};
	};


});