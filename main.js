const options = document.querySelectorAll(".option");
let userChoise;
const middleSection = document.getElementById("middleSection");
const bottomSection = document.getElementById("bottomSection");
const resultSection = document.getElementById("showResultContainer");
let cpOptions;
let score = 10;
const playAgain = document.getElementById("playAgain");
let userScore = 0;
let cpuScore = 0;
resultSection.style.display = "none";

const userChoiceOptions = {
  rock: "./images/Rock.png",
  paper: "./images/Paper.png",
  scissors: "./images/Scissors.png",
};

options.forEach((x) =>
  x.addEventListener("click", (e) => {
    userChoise = e.target.id;
    if (score > 0) {
      userChoice();
    } else {
      middleSection.style.display = "none";
      bottomSection.style.display = "none";
      resultSection.style.display = "flex";
      winLoose();
    }
  })
);

const userChoice = () => {
  middleSection.style.display = "none";
  bottomSection.style.display = "flex";

  // if (userChoise === 'rock') {
  //     document.getElementById("userPicked").src= "./images/Rock.png";
  // }
  // else if(userChoice === 'paper'){
  //     document.getElementById("userPicked").src= "./images/Paper.png";
  // }
  // else if(userChoice === 'scissorss'){
  //     document.getElementById("userPicked").src= "./images/scissorss.png";
  // }
  document.getElementById("userPicked").src = userChoiceOptions[userChoise];
  computerPicked();
  Results(userChoise, cpOptions);
};

const computerPicked = () => {
  let computerOptions = ["rock", "paper", "scissors"];
  cpOptions =
    computerOptions[Math.floor(Math.random() * computerOptions.length)];
  document.getElementById("computerPicked").src = userChoiceOptions[cpOptions];
};

const Results = (userChoise, cpOptions) => {
  if (userChoise === "paper" && cpOptions === "scissors") {
    Decission("YOU Loose!");
    Score(score - 1);
    CpuScore(cpuScore + 1);
  } else if (userChoise === "paper" && cpOptions === "rock") {
    Decission("YOU win!");
    Score(score - 1);
    UserScore(userScore + 1);
  } else if (userChoise === "rock" && cpOptions === "scissors") {
    Decission("YOU win!");
    Score(score - 1);
    UserScore(userScore + 1);
  } else if (userChoise === "paper" && cpOptions === "paper") {
    Decission("Match Tie!");
    Score(score - 1);
  } else if (userChoise === "rock" && cpOptions === "scissors") {
    Decission("YOU win!");
    Score(score - 1);
    UserScore(userScore + 1);
  } else if (userChoise === "rock" && cpOptions === "paper") {
    Decission("YOU Loose");
    Score(score - 1);
    CpuScore(cpuScore + 1);
  } else if (userChoise === "rock" && cpOptions === "rock") {
    Decission("Match Tie!");
    Score(score - 1);
  } else if (userChoise === "scissors" && cpOptions === "scissors") {
    Decission("Match Tie!");
    Score(score - 1);
  } else if (userChoise === "scissors" && cpOptions === "rock") {
    Decission("YOU Loose!");
    Score(score - 1);
    CpuScore(cpuScore + 1);
  } else if (userChoise === "paper" && cpOptions === "scissors") {
    Decission("YOU Loose!");
    Score(score - 1);
    CpuScore(cpuScore + 1);
  } else if (userChoise === "scissors" && cpOptions === "paper") {
    Decission("YOU Win!");
    Score(score - 1);
    UserScore(userScore + 1);
  }
};

const Decission = (decission) => {
  document.querySelector(".resultContainer h1").innerText = decission;
};

const Score = (totalScore) => {
  score = totalScore;
  document.querySelector(".score h1").innerText = totalScore;
};

playAgain.addEventListener("click", () => {
  middleSection.style.display = "flex";
  bottomSection.style.display = "none";
});

const UserScore = (Uscore) => {
  userScore = Uscore;
  document.querySelector(".userScore h1").innerText = Uscore;
};

const CpuScore = (Cscore) => {
  cpuScore = Cscore;
  document.querySelector(".cpuScore h1").innerText = Cscore;
};
const winLoose = () => {
  if (userScore == cpuScore) {
    document.querySelector(".result h1").innerText = "Ahh! Match Draw";
  } else if (userScore > cpuScore) {
    document.querySelector(".result h1").innerText = "Yeahh! You win";
  } else {
    document.querySelector(".result h1").innerText = "Ohhh! You Loose";
  }
};
