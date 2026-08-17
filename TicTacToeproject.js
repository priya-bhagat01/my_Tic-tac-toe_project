"use strict";

let turnO = true;

let box = document.querySelectorAll(".position");

box.forEach((playerTurn) => {
	playerTurn.addEventListener("click", () => {

	if (playerTurn.innerText !== "") return;

	if (turnO) {
		playerTurn.innerText = "O";
		turnO = false;
	} else {
		playerTurn.innerText = "X";
		turnO = true;
	}
})
});