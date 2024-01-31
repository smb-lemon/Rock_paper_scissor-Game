let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice"); //Accessing "choice" class
const mgs = document.querySelector("#msg"); //Accessing "msg" id
const comScorePara = document.querySelector("#computer-score"); //Accessing "computer-score" id
const userScorePara = document.querySelector("#user-score"); //Accessing "user-score" id

const genComChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const idx = Math.floor(Math.random() * 3); //For generating a random value
  return options[idx];
};

const showWinner = (userWin, userChoice, comChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    //console.log("you win");
    mgs.innerText = `You Win! Your ${userChoice} beats ${comChoice}`;
    mgs.style.backgroundColor = "Green";
  } else {
    computerScore++;
    comScorePara.innerText = computerScore;
    //console.log("you lose");
    mgs.innerText = `You Lose !! ${comChoice} beats Your ${userChoice}`;
    mgs.style.backgroundColor = "Red";
  }
};

const drawGame = () => {
  //console.log("game was drawn");
  mgs.innerText = `Game was Drawn`;
  mgs.style.backgroundColor = "#081b31";
};

const playGame = (userChoice) => {
  //console.log("user choice =", userChoice);
  const comChoice = genComChoice(); //Generate Computer Choice
  //console.log("computer choice = ", comChoice);
  if (userChoice === comChoice) {
    //draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissor, paper
      userWin = comChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissor
      userWin = comChoice === "scissor" ? false : true;
    } else {
      //rock, paper
      userWin = comChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, comChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    //Adding click Event
    const userChoice = choice.getAttribute("id"); //Accessing id
    playGame(userChoice);
  });
});
