let choices = document.querySelectorAll(".choice")
// console.log(choices)
let score = document.getElementById("score")
let restart = document.querySelector("#restart")
let modal = document.querySelector('.modal')
let result = document.getElementById("result")

let scoreboard = {
    player:0,
    computer:0
}

function play(e){
// console.log("play",e.target)
restart.style.display = "block"
let playerChoice = e.target.id;
// console.log(playerChoice)
let computerChoice = getComputerChoice()
// console.log(ComputerChoice)
let winner = getWinner(playerChoice,computerChoice)
// console.log("winner",winner)
showWinner(winner,computerChoice)
}

// choices.forEach(choice => console.log(choice))
// choices.forEach(function(choice){ choice.addEventListener("click",play)})                 //old
choices.forEach(choice => choice.addEventListener("click",play))                             //new
window.addEventListener("click",clearModal)
restart.addEventListener('click',restartGame)

function getComputerChoice(){  
let randomNumber = Math.random();
// console.log(randomNumber)
if(randomNumber<0.30){
    return "rock"
}
else if(randomNumber>=0.60){
    return "paper"
}
else 
return "scissors"
}

function showWinner(winner,computerChoice){
    console.log(computerChoice)
    if(winner === 'player'){
        scoreboard.player++;
        result.innerHTML =`
        <h1 class="text-win">You Win</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong>
        </p>
        `;
    }else if(winner === 'computer'){
        scoreboard.computer++;
        result.innerHTML =`
        <h1 class="text-lose">You Lose</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"</i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong>
        </p>
        `;
     }else{
        result.innerHTML =`
        <h1 class="text-win">It's a Draw</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"</i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong>
        </p>
        `;

    }
    modal.style.display = 'block'
    score.innerHTML =`
    <p>Player : ${scoreboard.player}</p>
    <p>Computer : ${scoreboard.computer}</p>
    `;
}

function getWinner(p,c){
    // console.log(p,c)
    if(p===c){
        return 'draw'
    }
    else if(p==='rock'){
        if(c=='paper'){
            return 'computer'
        }else{
            return 'player'
        }
    }
    else if(p==='paper'){
        if(c=='scissors'){
            return 'computer'
        }else{
            return 'player'
        }
    }
    else if(p==='scissors'){
        if(c=='rock'){
            return 'computer'
        }else{
            return 'player'
        }
    }
}     

function clearModal(e){
    // console.log(e.target)
    if(e.target == modal){
        modal.style.display = 'none'
    }
}

function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
      <p>Player: 0</p>
      <p>Computer: 0</p>
    `;
    restart.style.display = "none"
     
  }

function finalWin(){

}