
// BUG => BUTTON STAYS ON PLAYER 2 IF PLAYER 2 WINS


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









// ============= ADD EVENT LISTENER TO BUTTON =============

function holdButton (activePlayer, inActivePlayer) {

	//  Assign the hold buttons
	let playerHoldBtn = document.getElementById(`play${activePlayer}-btn-hold`);
	playerHoldBtn.addEventListener("click", updateScoreVariables, false) ;
	playerHoldBtn.active = activePlayer;
	playerHoldBtn.inActive = inActivePlayer;
}


// ============= UPDATE SCORES=============

function updateScoreVariables (event) {

	// Assign the active player
	let activePlayer = event.currentTarget.active;
	let inActivePlayer = event.currentTarget.inActive;

	updateScores(activePlayer, inActivePlayer)
}


function updateScores (activePlayer, inActivePlayer) {
	//  Assign the scores based on active player
	let playerHoldScore = document.getElementById(`play${activePlayer}-score-hold`);
	let playerTotalScore = document.getElementById(`play${activePlayer}-score-total`);


	if (activePlayer == "1"){
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








// ============= Randomise dice when pressed =============

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

	diceOutcome(randomNum, activePlayer, inActivePlayer)

}



// ============= DICE OUTCOME =============

// If the outcome is 1 => set holding score to zero => change inner text to zero
// Else keep adding to holding score
let diceOutcome = (randomNum, activePlayer, inActivePlayer ) => {

	// console.log(`HERE ${activePlayer}, ${inActivePlayer}`)

	let playerHoldScore = document.getElementById(`play${activePlayer}-score-hold`);

	if (randomNum == 1 ){
		if (activePlayer == "1"){
			playerOne.holdingScore = 0;
			updateScores(activePlayer, inActivePlayer)
		}
		else {
			playerTwo.holdingScore = 0;
			updateScores(activePlayer, inActivePlayer)
		}
		playerHoldScore.innerText = `0`;
	}
	else{
		if (activePlayer == "1") {
			playerOne.holdingScore = playerOne.holdingScore + randomNum;
			playerHoldScore.innerText = `${playerOne.holdingScore}`
		}
		else{
			playerTwo.holdingScore = playerTwo.holdingScore + randomNum;
			playerHoldScore.innerText = `${playerTwo.holdingScore}`
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

	let endingWinner = document.getElementById("end-winner")

	endingWinner.innerText=`Player ${activePlayer} Wins!`

	body.addEventListener("keydown", (event) => {

	// Turn off the display
	endOverscreen.style.display = "none"

	// Reset the scores 
	resetScores();

	// Reset Active Player 
	let activePlayer = "1";
	let inActivePlayer = "2" 

	// Start Game
	gameStart(activePlayer, inActivePlayer);
	})
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




