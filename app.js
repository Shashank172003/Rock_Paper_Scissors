let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-score') ;
const compScorePara = document.querySelector('#comp-score');

const drawGame = () => {
    // console.log("game was a draw");
    msg.textContent = "Match was a draw!, try again!";
    msg.style.backgroundColor = "#D9A299";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("you win!");
        msg.textContent= `you win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    } else {
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("you lose!");
        msg.textContent = `you lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice) => {
    // console.log("user choice:", userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    // console.log("computer choice:", compChoice);

    if(userChoice === compChoice) {
        // draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === 'rock') {
            userWin = compChoice === 'paper' ? false : true;
        } else if(userChoice === 'paper') {
            userWin = compChoice === 'scissors' ? false : true;
        } else if(userChoice === 'scissors') {
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach(choice => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})