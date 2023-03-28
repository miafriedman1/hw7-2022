let video = document.querySelector("#player1");
let play = document.querySelector("#play");
let pause = document.querySelector("#pause");
let slower = document.querySelector("#slower");
let faster = document.querySelector("#faster");
let skip = document.querySelector("#skip");
let mute = document.querySelector("#mute");
let slider = document.querySelector("#slider");
let current_volume = document.querySelector("#volume");
let vintage = document.querySelector("#vintage");
let original = document.querySelector("#orig");

// Adding eventlistener to load video on the screen when the page loads and give console signal 
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.load();
});

// Adding eventlistener to play video only when the play button is clicked and give console signal
play.addEventListener("click", function(){
	video.play();
	current_volume.innerHTML = (video.volume * 100);
	console.log("Playing Video")
})

// Adding eventlistener to pause the video only when the pause button is clicked and give console signal
pause.addEventListener("click", function(){
	video.pause();
	console.log("Paused Video")
});

// Adding eventlistener to slow down the playback rate to 0.75 of its previous rate and give console signal of current rate
slower.addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Slowing Down Video")
	console.log(video.playbackRate);
});

// Adding eventlistener to speed up the playback rate to its previous rate/0.75 and give console signal of current rate
faster.addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("Speeding Up Video")
	console.log(video.playbackRate);
});

// Adding eventlistener to skip through video and give console signal and video runtime
skip.addEventListener("click", function() {
	video.currentTime += 10;
	console.log(video.currentTime);
	if (video.currentTime == 67.403333){
		video.currentTime = 0;
		video.pause();
		console.log(video.currentTime);
		skip.disabled = true;
	}
});

// Adding eventlistener to mute the sound of the video and give console signal of muted vs unmuted
mute.addEventListener("click", function() {
	if (video.muted == false) {    
		video.muted = true;
		mute.innerHTML = "Unmute";
		console.log("Video Muted")
		current_volume.innerHTML = "0"
 	}

 	else {
	 	video.muted = false;
	 	mute.innerHTML = "Mute";
		current_volume.innerHTML = (video.volume * 100);
	 	console.log("Video Unmuted")
 	}
});

// Adding eventlistener to change the audio volume when you move the slider and update the volume information on the page and in the console
slider.addEventListener("change", function(x) {
	video.volume = (slider.value/100);
	current_volume.innerHTML = (video.volume * 100);
	console.log("Volume is "+(video.volume * 100));
});

// Adding eventlistener to apply the existing class oldSchool to the video when you click the Old School button
vintage.addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Old School Class Added")
});

// Adding eventlistener to remove the class oldSchool from the video when you click the Original button
original.addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Old School Class Removed. Back to Original")
});


