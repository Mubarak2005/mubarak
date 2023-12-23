let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turn = true;

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () =>{
  turn = true;
  resetbtn.disabled = false;
  enableBoxes();
}
newGameBtn.addEventListener("click", () =>{
  msgContainer.classList.add("hide");
  resetGame();
}); 

resetbtn.addEventListener("click", () =>{
  for(let box of boxes){
    box.innerText = "";
    resetGame();
  }
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.style.color="white";
      box.innerText = "O";
      turn = false;
    } else {
      box.style.color="red";
      box.innerText = "X";
      turn = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
    resetbtn.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations 🥳, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner is", pos1val);
        showWinner(pos1val);
      }
    }
  }
};
