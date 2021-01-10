function runTheClock() {
	date = new Date();

	let hr = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

	hr < 10 ? hr = "0" + hr : hr = hr
	min < 10 ? min = "0" + min : min = min
	sec < 10 ? sec = "0" + sec : sec = sec
	document.querySelector(".screen p").innerHTML = hr + ":" + min + ":" + sec;
}

var interval = setInterval(runTheClock, 1000);