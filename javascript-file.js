computerPlay = function(max) {
    roll = Math.floor(Math.random() * max)
    if (roll === 0) {
        return 'paper'
    } else if (roll === 1) {
        return 'scissors'
    } else {
        return 'rock'
    }
}
console.log("hi")

const rockbtn = document.querySelector('#rock');
rockbtn.addEventListener('click', () => {
    alert('HI ROCK')
})
const paperbtn = document.querySelector('#paper')
paperbtn.addEventListener('click',() => {
    alert('paper')
})
const scissorsbtn = document.querySelector('#scissors')
scissorsbtn.addEventListener('click', () => {
    alert('scissors')
})


/*

//playerSelection = prompt("");


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie'
    } else if (playerSelection === 'paper') {
        return (computerSelection === 'rock') ? 'Win':'Lose' 
    } else if (playerSelection === 'scissors') {
        return (computerSelection ==='paper') ? 'Win':'Lose'
    } else if (playerSelection === 'rock') {
        return (computerSelection === 'scissors') ? 'Win':'Lose'
    }
}

const computerSelection = computerPlay(3)
console.log(`Player's selection: ${playerSelection}`)
console.log(`Computer's Selection: ${computerSelection}`)


function message(round, playerSelection, computerSelection) {
    if (round === 'Win') {
        return `${playerSelection} beats ${computerSelection}!`
    } else if (round === 'Lose') {
        return `${computerSelection} beats ${playerSelection}`
    } else {
        return `You both picked the same one!`
    }
}
whyResult = message(round, playerSelection, computerSelection)
console.log (`You ${round}! ${whyResult}`)


function game() {
    for (let i=0; i < 5; i++) {
        const computerSelection = computerPlay(3);
        const playerSelection = playerPlay();
        round = playRound(playerSelection, computerSelection);
        whyResult = message(round, playerSelection, computerSelection);
        console.log(`You ${round}! ${whyResult}`);
    }
}
*/
