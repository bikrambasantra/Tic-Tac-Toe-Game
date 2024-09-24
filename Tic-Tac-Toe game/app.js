let boxes = document.querySelectorAll('.box');
let resetbutton = document.querySelector('#reset');
let newgamebutton = document.querySelector('#reset-button');
let msgcontainer = document.querySelector('.message');
let msg = document.querySelector('.msg');
let option = document.querySelector('.option');

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () => {
    turn0 = true;
    enableboxes();
    msgcontainer.classList.add("hide");
    option.classList.add("option");
    
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button clicked");
        if(turn0){
            box.innerHTML = 'O';
            turn0 = false;
        }else{
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});



const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    option.classList.remove("option");
    disableboxes();
}


const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner");
                showWinner(pos1val);
            }
        }
    }
}

newgamebutton.addEventListener("click",resetGame);
resetbutton.addEventListener("click",resetGame);
