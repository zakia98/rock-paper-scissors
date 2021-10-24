function computerPlay(max) {
    roll = Math.floor(Math.random() * max)
    if (roll === 0) {
        return 'Paper'
    } else if (roll === 1) {
        return 'Scissors'
    } else {
        return 'Rock'
    }
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie'
    } else if (playerSelection === 'Paper') {
        return (computerSelection === 'Rock') ? 'Win':'Lose' 
    } else if (playerSelection === 'Scissors') {
        return (computerSelection ==='Paper') ? 'Win':'Lose'
    } else if (playerSelection === 'Rock') {
        return (computerSelection === 'Scissors') ? 'Win':'Lose'
    }
}

function messageGenerator(result, playerSelection, computerSelection) {
    if (result === 'Win') {
        return `${playerSelection} beats ${computerSelection}!`
    } else if (result === 'Lose') {
        return `${computerSelection} beats ${playerSelection}`
    } else {
        return `You both picked the same one!`
    }
}

whyResult = function(result, playerSelection, computerSelection) {
    message = 
        messageGenerator(result, playerSelection, computerSelection)
    return `You ${result}! ${message}`
}



function addHistory(result, finalMessage, playerSelection, computerSelection){
    const record = document.querySelector("#record");
    const records = document.createElement('div');
    records.classList.add('records');
    
    const h3 = document.createElement('h3');
    h3.textContent = `${result}`

    const h4 = document.createElement('h4');
    h4.textContent = `${finalMessage}`

    const h5 = document.createElement('h5');
    h5.textContent = `You chose: ${playerSelection}\n` +
    `Computer chose: ${computerSelection}`

    records.appendChild(h3)
    records.appendChild(h4)
    records.appendChild(h5)
    record.appendChild(records)
}



const rockbtn = document.querySelector('#rock');
rockbtn.addEventListener('click', () => {
    let computerSelection = computerPlay(3)
    const playerSelection = 'Rock'
    result = playRound(playerSelection, computerSelection)
    finalMessage = whyResult(result, 'Rock', computerSelection)
    addHistory(result, finalMessage, playerSelection, computerSelection)
})

const paperbtn = document.querySelector('#paper')
paperbtn.addEventListener('click',() => {
    let computerSelection = computerPlay(3)
    result = playRound('Paper', computerSelection)
    console.log(result)
    console.log(whyResult(result, 'Paper', computerSelection))
})

const scissorsbtn = document.querySelector('#scissors')
scissorsbtn.addEventListener('click', () => {
    let computerSelection = computerPlay(3)
    result = playRound('Scissors', computerSelection)
    console.log(result)
    console.log(whyResult(result, 'Scissors', computerSelection))
})
