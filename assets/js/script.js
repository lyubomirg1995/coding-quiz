var timeEl = document.getElementById("counter-key");
var secondsEl = document.getElementbyId("counter-value");
var secondsLeft = 40;
var startButton = document.getElementbyId("start-button");

startButton.addEventListener("click", function () {
    function setTime () {
        //Sets interval in variable
        var timerInterval = setInterval(function() {
            document.getElementbyId("counter-value").innerHTML = secondsLeft
            secondsLeft--;
            secondsLeft.textContent = secondsEl;
    
            if(secondsLeft === 0) {
                clearInterval(timerInterval);
                alert("You're out of time!");
    

            };
            
            
        }, 1000);
        
    };
});
