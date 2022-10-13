


// ======== VARIABLES ============

let body = document.body;



// -------- GAME VARIABLES

let playerOne = {
	holdingScore: 0,
	totalScore: 0
}

let playerTwo = {
	holdingScore: 0,
	totalScore: 0
}


// ============= Remove overlay screen if any button is detected =============

let secOverscreen = document.getElementById("sec-overscreen");

body.addEventListener("keydown", (event) => {
	// Turn off the display
	if (secOverscreen.style.display != "none"){
		secOverscreen.style.display = "none";
	}
})


// ============= Randomise dice when pressed =============

let figDie = document.getElementById("fig-die");

// Randomise dice when clicked
figDie.addEventListener("click", (event) => {
	let randomNum = Math.floor((Math.random() * 6) + 1);

	let playerOneHoldingh3 = document.getElementById("play1-hold");


	// Change the image depending on which number is selected
	switch (randomNum) {
		case randomNum = 1:
			figDie.src = "./assets/1.png"
			break;
		case randomNum = 2:
			figDie.src = "./assets/2.png"
			break;
		case randomNum = 3:
			figDie.src = "./assets/3.png"
			break;
		case randomNum = 4:
			figDie.src = "./assets/4.png"
			break;
		case randomNum = 5:
			figDie.src = "./assets/5.png"
			break;
		case randomNum = 6:
			figDie.src = "./assets/6.png"
			break;
	}

	// Add the random number to player 1's holding 

	playerOne.holdingScore = playerOne.holdingScore + randomNum;

	// Change value of player 1's holding 
	playerOneHoldingh3.innerText = `${playerOne.holdingScore}`

})



// ============= Change the value of player 1's hold when die is clicked =============









//  When the dice is clicked => Change image then change the score. So we need a function 




