var startButton = document.getElementById('startButton');
var counter = document.getElementById('counter');
var resetButton = document.getElementById('resetButton');

var intervalId;

var startTimer = function(){
	if(startButton.value === "Start"){
		startButton.value = "Pause";
		intervalId = setInterval(increaseCount, 600);	
	}
	else{ 
		startButton.value = "Start";
		clearInterval(intervalId);
	}
 	
	
}

var increaseCount = function(){
	var currentCount = Number(counter.innerHTML);
	++currentCount;
	counter.innerHTML = currentCount;
}

function resetClock(){
	clearInterval(intervalId);

	counter.innerHTML = 0;
	if(startButton.value === "Pause"){
		startButton.value = "Start";
	}

}


startButton.addEventListener('click', startTimer, false);

resetButton.addEventListener('click', resetClock, false);

