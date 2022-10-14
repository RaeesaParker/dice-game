
// WRIE A FUNCTION TO RESET EVERYTHING = ADD IT TO THE END SCREEN



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

let secOverscreen = document.getElementById("start-screen");

let playerOneHoldingh3 = document.getElementById("play1-score-hold");

let playerOneTotalh2 = document.getElementById("play1-score-total");

let playerOneHoldBtn = document.getElementById("play1-btn-hold")

let playerTwoHoldingh3 = document.getElementById("play2-score-hold");

let playerTwoTotalh2 = document.getElementById("play2-score-total");

let playerTwoHoldBtn = document.getElementById("play2-btn-hold")







//====================================================
// ================== EVENT LISTENERS ================
// ===================================================


// ====== Remove overlay screen if any button is detected ====

body.addEventListener("keydown", (event) => {
	// Turn off the display
	if (secOverscreen.style.display != "none"){
		secOverscreen.style.display = "none";
	}
	// Add overscreen to player 2
	gameStart()
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



// ============= HOLD BUTTON =============
//  If the hold button is clicked then add the holding score to the total => take holding down to zero
playerOneHoldBtn.addEventListener("click", () => {
	playerOne.totalScore = playerOne.totalScore + playerOne.holdingScore ; 
	playerOne.holdingScore = 0;

	updateScoreText()
})



// ============= NEW GAME BUTTON =============

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




//====================================================
// ==================== FUNCTIONS ====================
// ===================================================

// ============= START GAME =============

let gameStart = () => {
	// Add overscreen to player 2
	addOverscreen()
}

// Add overscreen to player screen
let addOverscreen = () => {
	let playerTwoOverscreen = document.getElementById("player2-div")
	playerTwoOverscreen.style.backgroundColor = "var(--black)"
}


// ============= RESET ALL SCORES ON GAME RESTART =============


let resetScores = () => {
	// Reset scores stored in objects
	playerOne = {
		holdingScore: 0,
		totalScore: 0
	}

	playerTwo = {
		holdingScore: 0,
		totalScore: 0
	}

	// Reset scores on gameboard
	playerOneTotalh2.innerText = `0`;
	playerOneHoldingh3.innerText = `0`
	playerTwoTotalh2.innerText = `0`;
	playerTwoHoldingh3.innerText = `0`
}


// ============= DICE OUTCOME =============

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





// ============= UPDATE SCORES=============

let updateScoreText = () => {
	playerOneTotalh2.innerText = `${playerOne.totalScore}`;
	playerOneHoldingh3.innerText = `${playerOne.holdingScore}`

	// If the score is over 20 => Add the ending screen
	if (playerOne.totalScore > 20){
		addEndingScreen()
	}
}


let addEndingScreen = () =>{
	let endOverscreen = document.getElementById("end-screen")
	// Turn off the display
	if (endOverscreen.style.display = "none"){
		endOverscreen.style.display = "block";
	}

	body.addEventListener("keydown", (event) => {

	// Turn off the display
	endOverscreen.style.display = "none"

	// Reset the scores 
	resetScores();

	// Start Game
	gameStart();
	})
}





