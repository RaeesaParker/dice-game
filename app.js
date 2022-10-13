


// ======== VARIABLES ============

let body = document.body;


// ============= Remove overlay screen if any button is detected =============

let secOverscreen = document.getElementById("sec-overscreen");

body.addEventListener("keydown", (event) => {
	// Turn off the display
	if (secOverscreen.style.display != "none"){
		secOverscreen.style.display = "none"
	}
})