var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	let vol= document.querySelector("#volume").innerHTML = video.volume*100 + "%" ;
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
	
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /= 0.9;
	console.log(video.playbackRate);
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log(this);
	console.log(this.value);
	let new_vol= document.querySelector("#volume").innerHTML = this.value + "%";
	video.volume = this.value/100;
});

document.querySelector("#mute").addEventListener("click", function(){
	console.log("Mute")
	if (video.muted==false) {
		video.muted=true;
		this.innerHTML = "Unmute";
	} 
	else  {
		video.muted=false;
		this.innerHTML = "Mute";
	}
});

document.querySelector("#skip").addEventListener("click", function(){
	let time=document.querySelector("#myVideo");
	if (video.currentTime<video.duration - 5){
		video.currentTime +=5;
	}
	else{
		video.currentTime = 0;
	}
	let left =video.duration-video.currentTime;
	console.log("Current Location is "+ video.currentTime);
	console.log(video.duration);
	console.log("Time left in video is " + left);
	video.play();
})

document.querySelector("#old").addEventListener("click", function(){
	console.log("Old School");
	video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function(){
	console.log("Orginal");
	video.classList.remove("oldTime");
});