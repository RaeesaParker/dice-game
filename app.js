


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

let btnNewGame = document.getElementById("btn-newGame");

let playerOneHoldingh3 = document.getElementById("play1-score-hold");

let playerOneTotalh2 = document.getElementById("play1-score-total");

let playerOneHoldBtn = document.getElementById("play1-btn-hold")



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

	diceOutcome(randomNum)
})


// If the outcome is 1 => set holding score to zero => change inner text to zero
// Else keep adding to holding score
let diceOutcome = (randomNum) => {
	if (randomNum == 1 ){
		playerOne.holdingScore = 0;
	}
	else{
		playerOne.holdingScore = playerOne.holdingScore + randomNum;
	}
	playerOneHoldingh3.innerText = `${playerOne.holdingScore}`
}


//  If the hold button is clicked then add the holding score to the total => take holding down to zero
playerOneHoldBtn.addEventListener("click", () => {
	playerOne.totalScore = playerOne.holdingScore ; 
	playerOne.holdingScore = 0;
	updateScoreText()
})



let updateScoreText = () => {
	playerOneTotalh2.innerText = `${playerOne.totalScore}`;
	playerOneHoldingh3.innerText = `${playerOne.holdingScore}`
}




//  When HOLD is pressed = > switch to the other player



// Add event listener to NEW GAME button which resets everything

btnNewGame.addEventListener("click", () => {
	playerOne = {
		holdingScore: 0,
		totalScore: 0
	}

	playerTwo = {
		holdingScore: 0,
		totalScore: 0
	}
	playerOneTotalh2.innerText = `0`;
	playerOneHoldingh3.innerText = `0`;

	secOverscreen.style.display = "block"

});


