"use strict";

let turnO = true;

let boxes = document.querySelectorAll(".position");

boxes.forEach((box) => {
	box.addEventListener("click", () => {

	if (box.innerText !== "") return;

	if (turnO) {
		box.innerText = "O";
		turnO = false;
	} else {
		box.innerText = "X";
		turnO = true;
	}
	box.disabled = true;
	checkWinner();
});
});

const winningPatterns = [
	[0, 1, 2],
	[0, 3, 6],
	[0, 4, 8],
	[1, 4, 7],
	[2, 5, 8],
	[2, 4, 6],
	[3, 4, 5],
	[6, 7, 8],
];

function disabledButtons() {
	boxes.forEach((box) => {
		box.disabled = true;
	})
}

function enableButtons() {
	boxes.forEach((box) => {
		box.disabled = false;
		box.innerText = "";
	})
}

function showWinner(winner) {
	msg.innerText = `Congratulations, Winner is ${winner}`;
	msgContainer.classList.remove("hide");
}

function checkWinner() {
	winningPatterns.forEach(pattern => {
		let posValue1 = boxes[pattern[0]].innerText;
		let posValue2 = boxes[pattern[1]].innerText;
		let posValue3 = boxes[pattern[2]].innerText;

		if (posValue1 != "" && posValue2 != "" && posValue3 != "") {
			if (posValue1 === posValue2 && posValue2 === posValue3) {
				disabledButtons();
				showWinner(posValue1);
			}
		}
	})
}

let msgContainer = document.querySelector(".winner");
let msg = document.querySelector(".win");

let resetButton = document.querySelector(".reset-btn");

function resetGame() {
	turnO = true;
	enableButtons();
	msgContainer.classList.add("hide");
};