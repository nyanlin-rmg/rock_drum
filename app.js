var kick_acoustic01 = $("#kick-acoustic01")[0];
var snare_acoustic01 = $("#snare-acoustic01")[0];
var snare_acoustic02 = $("#snare-acoustic02")[0];
var hihat_acoustic02 = $("#hihat-acoustic02")[0];
var openhat_acoustic02 = $("#openhat-acoustic02")[0];
var tom_acoustic01 = $("#tom-acoustic01")[0];
var tom_acoustic02 = $("#tom-acoustic02")[0];
var ride_acoustic02 = $("#ride-acoustic02")[0];


$(document).keypress(function(event){
	if (event.key == 'k' || event.key == 'l'){
		kick_acoustic01.currentTime = 0;
		kick_acoustic01.play();
	}
	else if (event.key == 's' || event.key == 'a'){
		snare_acoustic01.currentTime = 0;
		snare_acoustic01.play();
	}
	else if (event.key == 'S' || event.key == 'A'){
		snare_acoustic02.currentTime = 0;
		snare_acoustic02.play();
	}
	else if (event.key == 'h' || event.key == 'g'){
		hihat_acoustic02.currentTime = 0;
		hihat_acoustic02.play();
	}
	else if (event.key == 'o' || event.key == 'p'){
		openhat_acoustic02.currentTime = 0;
		openhat_acoustic02.play();
	}
	else if (event.key == 't' || event.key == 'u'){
		tom_acoustic01.currentTime = 0;
		tom_acoustic01.play();
	}
	else if (event.key == 'T' || event.key == 'U'){
		tom_acoustic02.currentTime = 0;
		tom_acoustic02.play();
	}
	else if (event.key == 'r' || event.key == 'e'){
		ride_acoustic02.currentTime = 0;
		ride_acoustic02.play();
	}
});