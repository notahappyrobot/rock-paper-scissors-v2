console.log(`Welcome to Rock, Paper, Scissors!
================
Are you ready to play?`);

let roundCounter = 0;
let playerScore = 0;
let playerChoice = '';
let compScore = 0;
const compChoices = ['rock', 'paper', 'scissors'];
let compChoice ='';;


const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => 
    {
        playerChoice = 'rock';
        compChoice = compChoices[Math.floor(Math.random()*compChoices.length)];
        playRound(playerChoice,compChoice);
        
    }
);

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => 
    {               
        playerChoice = 'paper';
        compChoice = compChoices[Math.floor(Math.random()*compChoices.length)];
        playRound(playerChoice,compChoice);
 
    }
);

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', () => 
    {
        playerChoice ='scissors';
        compChoice = compChoices[Math.floor(Math.random()*compChoices.length)];
        playRound(playerChoice,compChoice);
    }
);

function computerPlay(){
    compChoice = compChoices[Math.floor(Math.random()*compChoices.length)];
    //returns choice
    return choice;
}

function playRound(player,computer){

    
    if(player === computer){    
        console.log ('tie');

    }else if(player === 'rock' && computer === 'scissors'){
        console.log(`player choice: ${player} BEATS comp choice: ${computer}`)
        playerScore++;
        updateScores();

    }else if(player === 'paper' && computer === 'rock'){
        console.log(`player choice: ${player} BEATS comp choice: ${computer}`)
        playerScore++;
        updateScores();

    }else if(player === 'scissors' && computer === 'paper'){
        console.log(`player choice: ${player} BEATS comp choice: ${computer}`)
        playerScore++;
        updateScores();
    }else{
        console.log(`comp choice: ${computer} BEATS player choice: ${player}`)
        compScore++;
        updateScores();
    }

}

//div scoreboard & updates

const container = document.querySelector('#container');
// makes score board
const gameScores = document.createElement('div');
gameScores.classList.add('gameScores');
gameScores.setAttribute('style', 'border: 5px solid black; background-color: slategrey; padding: 5px; width: 25%;');

//initialises scoreboard content
updateScores();

container.appendChild(gameScores);

//function call to update scores & append
function updateScores(){
    // 
    let scoreText = '';

    gameScores.textContent = `SCORES`;
    gameScores.textContent = `======`; 
    gameScores.textContent = `Player: ${playerScore} || Computer: ${compScore}`  
    container.appendChild(gameScores);
}