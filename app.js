var turnOn = 0; //0 for false, 1 for true
function bulbOnOff() {

    //If light is on, then turn it on
    if (turnOn == 0) {

        document.getElementById("bulb").src="lighton.png";
        turnOn = 1; //Light is turned on
    }

    //If light is on, then turn it off
    else if (turnOn == 1) {

        document.getElementById("bulb").src="lightoff.png";
        turnOn = 0; //Light is turned off
    }
}