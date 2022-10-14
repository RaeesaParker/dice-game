

// ADD ROLL DICE 


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

// let playerOneHoldingh3 = document.getElementById("play1-score-hold");

// let playerOneTotalh2 = document.getElementById("play1-score-total");

// let playerOneHoldBtn = document.getElementById("play1-btn-hold")

// let playerTwoHoldingh3 = document.getElementById("play2-score-hold");

// let playerTwoTotalh2 = document.getElementById("play2-score-total");

// let playerTwoHoldBtn = document.getElementById("play2-btn-hold")

let activePlayer = "1";

let inActivePlayer = "2";



//====================================================
// ==================== GAME PLAY ====================
// ===================================================




// ======================== Start OVERLAY SCREEN =======================

body.addEventListener("keydown", (event) => {

	let secOverscreen = document.getElementById("start-screen");

	// Turn off the display
	if (secOverscreen.style.display != "none"){
		secOverscreen.style.display = "none";
	}
	// Add overscreen to player 2
	gameStart(activePlayer, inActivePlayer)
})



// ============= START GAME =============

let gameStart = (activePlayer, inActivePlayer) => {

	let playerHoldBtns = document.querySelectorAll(".button-hold") 

	if (activePlayer == "1"){
		playerHoldBtns[0].style.display = "block";
		playerHoldBtns[1].style.display = "none";
	}
	else{
		playerHoldBtns[0].style.display = "none";
		playerHoldBtns[1].style.display = "block";
	}

	addOverscreen(activePlayer, inActivePlayer)
	holdButton(activePlayer, inActivePlayer)
	rollDice(activePlayer, inActivePlayer)
}


// ============= Add Overscreen =============

let addOverscreen = (activePlayer, inActivePlayer) => {

	let playerActiveOverscreen = document.getElementById(`player${activePlayer}-div`)
	let playerInActiveOverscreen = document.getElementById(`player${inActivePlayer}-div`)

	playerActiveOverscreen.style.backgroundColor = "var(--red)"
	playerInActiveOverscreen.style.backgroundColor = "var(--black)";
}



// ============= DICE OUTCOME =============

// If the outcome is 1 => set holding score to zero => change inner text to zero
// Else keep adding to holding score
let diceOutcome = (randomNum, activePlayer) => {

	console.log(activePlayer)

	let playerHoldScore = document.getElementById(`play${activePlayer}-score-hold`);

	if (randomNum == 1 ){
		if (activePlayer == "1"){
			playerOne.holdingScore = 0;
		}
		else {
			playerTwo.holdingScore = 0;
		}
		playerHoldScore.innerText = `0`;
	}
	else{
		if (activePlayer == "1") {
			console.log("Adding Player 1 outcome")
			playerOne.holdingScore = playerOne.holdingScore + randomNum;
			playerHoldScore.innerText = `${playerOne.holdingScore}`
		}
		else{
			console.log("Adding Player2 outcome")
			playerTwo.holdingScore = playerTwo.holdingScore + randomNum;
			playerHoldScore.innerText = `${playerTwo.holdingScore}`
		}
	}
}





// ============= HOLD BUTTON =============
//  Assign the hold buttons
// let playerHoldBtn = document.querySelectorAll(".button-hold");

// // Add anevent listener to each button => Run function to update the score
// playerHoldBtn.forEach( (button) => {
// 	button.addEventListener("click", updateScores, false) ;
// 	button.activePlayer = activePlayer;
// 	button.inActivePlayer = inActivePlayer;
// 	console.log(`Active Button= ${activePlayer}, inactive Button = ${inActivePlayer}`)

// });



// Function to add event listener to button 

function holdButton (activePlayer, inActivePlayer) {
	//  Assign the hold buttons
	let playerHoldBtn = document.getElementById(`play${activePlayer}-btn-hold`);
	playerHoldBtn.addEventListener("click", updateScores, false) ;
	playerHoldBtn.active = activePlayer;
	playerHoldBtn.inActive = inActivePlayer;
}


// ============= UPDATE SCORES=============

function updateScores (event) {

	// Assign the active player
	let activePlayer = event.currentTarget.active;
	let inActivePlayer = event.currentTarget.inActive;


	//  Assign the scores based on active player
	let playerHoldScore = document.getElementById(`play${activePlayer}-score-hold`);
	let playerTotalScore = document.getElementById(`play${activePlayer}-score-total`);


	if (activePlayer == "1"){
		console.log("Updating Player 1 score")
		// Update the total score and set holding score to zero
		playerOne.totalScore = playerOne.totalScore + playerOne.holdingScore ; 
		playerOne.holdingScore = 0;

		// Update HTML Score 
		playerTotalScore.innerText = `${playerOne.totalScore}`;
		playerHoldScore.innerText = `${playerOne.holdingScore}`

		// If the score is over 20 => Add the ending screen => else restart game
		if (playerOne.totalScore > 20){
			addEndingScreen(activePlayer)
		}
		else {
			activePlayer = "2";
			inActivePlayer = "1";
			gameStart(activePlayer, inActivePlayer);
		}
	}
	else{
		console.log("Updating Player 2 score")
		// Update the total score and set holding score to zero 
		playerTwo.totalScore = playerTwo.totalScore + playerTwo.holdingScore ; 
		playerTwo.holdingScore = 0;

		// Update HTML Score
		playerTotalScore.innerText = `${playerTwo.totalScore}`;
		playerHoldScore.innerText = `${playerTwo.holdingScore}`

		// If the score is over 20 => Add the ending screen => else restart game
		if (playerTwo.totalScore > 20){
			addEndingScreen(activePlayer)
		}
		else{
			activePlayer = "1";
			inActivePlayer = "2";
			gameStart(activePlayer, inActivePlayer);
		}
	}
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
	let allScores = document.querySelectorAll(".score");

	allScores.forEach((score) => {
		score.innerText = "0"
	})
}



// ============= ADD ENDING SCREEN =============

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








// ============= Randomise dice when pressed =============

// function holdButton (activePlayer, inActivePlayer) {
// 	//  Assign the hold buttons
// 	let playerHoldBtn = document.getElementById(`play${activePlayer}-btn-hold`);
// 	playerHoldBtn.addEventListener("click", updateScores, false) ;
// 	playerHoldBtn.active = activePlayer;
// 	playerHoldBtn.inActive = inActivePlayer;
// }

function rollDice (activePlayer, inActivePlayer) {
	// Randomise dice when clicked
	figDie.addEventListener("click", randomise, false);
	figDie.active = activePlayer
	figDie.inActive = inActivePlayer
}


// Randomise function 

function randomise (event) {

	// Assign the active player
	let activePlayer = event.currentTarget.active;
	let inActivePlayer = event.currentTarget.inActive;

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

}








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




