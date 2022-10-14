
// Create a variable called active player



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

let figDie = document.getElementById("fig-die");

let playerOneHoldingh3 = document.getElementById("play1-score-hold");

let playerOneTotalh2 = document.getElementById("play1-score-total");

let playerOneHoldBtn = document.getElementById("play1-btn-hold")

// let playerTwoHoldingh3 = document.getElementById("play2-score-hold");

// let playerTwoTotalh2 = document.getElementById("play2-score-total");

// let playerTwoHoldBtn = document.getElementById("play2-btn-hold")

let activePlayer = "1";

let inActivePlayer = "2";



//====================================================
// ==================== FUNCTIONS ====================
// ===================================================

// ============= START GAME =============

let gameStart = (activePlayer, inActivePlayer) => {

	console.log(activePlayer, inActivePlayer)

	let playerHoldScore = document.getElementById(`play${activePlayer}-score-hold`);
	let playerTotalScore = document.getElementById(`play${activePlayer}-score-total`);
	let playerHoldBtn = document.getElementById(`play${activePlayer}-btn-hold`);


	// Add overscreen to player 2
	addOverscreen(activePlayer)
}



// ============= Add Overscreen =============

let addOverscreen = (activePlayer) => {

	let playerOverscreen = document.getElementById(`player${inActivePlayer}-div`)

	playerOverscreen.style.backgroundColor = "var(--black)"
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
	document.getElementsByClassName("score").innerText = `0`;
}





// ============= DICE OUTCOME =============

// If the outcome is 1 => set holding score to zero => change inner text to zero
// Else keep adding to holding score
let diceOutcome = (randomNum, activePlayer) => {
	if (randomNum == 1 ){
		playerOne.holdingScore = 0;
	}
	else{
		playerOne.holdingScore = playerOne.holdingScore + randomNum;
	}
	playerHoldScore.innerText = `${playerOne.holdingScore}`
}





// ============= UPDATE SCORES=============

let updateScoreText = (activePlayer) => {

	if (activePlayer == "1"){
		playerTotalScore.innerText = `${playerOne.totalScore}`;
		playerHoldScore.innerText = `${playerOne.holdingScore}`
		// If the score is over 20 => Add the ending screen
		if (playerOne.totalScore > 20){
			addEndingScreen(activePlayer)
		}
		else {
			activePlayer = "2";
		}
	}
	else{
		playerTotalScore.innerText = `${playerTwo.totalScore}`;
		playerHoldScore.innerText = `${playerTwo.holdingScore}`
		if (playerTwo.totalScore > 20){
			addEndingScreen(activePlayer)
		}
		else{
			activePlayer = "1"
		}
	}
}


let addEndingScreen = (activePlayer) =>{
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




//====================================================
// ================== EVENT LISTENERS ================
// ===================================================


// ====== Remove overlay screen if any button is detected ====

body.addEventListener("keydown", (event) => {

	let secOverscreen = document.getElementById("start-screen");

	// Turn off the display
	if (secOverscreen.style.display != "none"){
		secOverscreen.style.display = "none";
	}
	// Add overscreen to player 2
	gameStart(activePlayer, inActivePlayer)
})




// ============= Randomise dice when pressed =============

// Randomise dice when clicked
figDie.addEventListener("click", (activePlayer) => {

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

	diceOutcome(randomNum, activePlayer)
})



// ============= HOLD BUTTON =============
//  If the hold button is clicked then add the holding score to the total => take holding down to zero
playerHoldBtn.addEventListener("click", (activePlayer) => {

	if (activePlayer == "1"){
		playerOne.totalScore = playerOne.totalScore + playerOne.holdingScore ; 
		playerOne.holdingScore = 0;
	}
	else{
		playerTwo.totalScore = playerTwo.totalScore + playerTwo.holdingScore ; 
		playerTwo.holdingScore = 0;
	}
	updateScoreText(activePlayer)
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
	resetScores()

	secOverscreen.style.display = "block"
});




