let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const uScore = document.getElementById("user-score");
const cScore = document.getElementById("comp-score");


const compChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const num = Math.floor(Math.random()*3);
    return options[num];
}


const draw = () =>{
    msg.innerText = "DRAW!";
    msg.style.color = "black";
}


const showWinner = (userWin,  userChoice, comptChoice) => {
    if(userWin === true){
        userScore++;
        uScore.innerHTML = userScore;
        msg.style.color = "green"
        msg.innerText = `You Won! Your ${userChoice} beats ${comptChoice}`;
    }
    else{
        compScore++;
        cScore.innerHTML = compScore;
        msg.style.color = "red";
        msg.innerText = `You Lost! ${comptChoice} beats your ${userChoice}`;
    }
}


const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const comptChoice = compChoice();
    console.log("Computer choice = ",comptChoice);
    
    if(userChoice === comptChoice){
        draw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = comptChoice === "paper" ? false: true;
        }
        else if(userChoice === "paper"){
            userWin = comptChoice === "scissors"? false: true;
        }
        else{
            userWin = comptChoice === "rock"? false: true;
        }
        showWinner(userWin, userChoice, comptChoice);
    }

}


choices.forEach((choice)=>{
    choice.onclick = () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    }
})