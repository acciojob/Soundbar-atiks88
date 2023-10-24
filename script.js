//your JS code here. If required.
function playsound(soundFile) {
	var audio = new Audio(soundFile);
	audio.play();
}

document.getElementById("btn").addEventListner("click",function(){
	playsound(sound1.mp3);
	
});
