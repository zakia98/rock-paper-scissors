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
    h3.textContent = `Round: ${round}! ${result}!`

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

function changeAnnoucement(round, result, playerSelection, computerSelection) {
    const announcement = document.querySelector('#result');
    announcement.textContent = `Round ${round}: You ${result}` +
        `\nYou chose: ${playerSelection}` +
        `\nComputer chose: ${computerSelection}`
}

function limitHistory() {
    const records = document.querySelector('#record');
    console.log(record.childElementCount)
    if (records.childElementCount > 4) {
        let firstChild = records.firstElementChild
        records.removeChild(firstChild)
    } 
}

let round = 0


const rockbtn = document.querySelector('#rock');
rockbtn.addEventListener('click', () => {
    round++
    let computerSelection = computerPlay(3)
    const playerSelection = 'Rock'
    result = playRound(playerSelection, computerSelection)
    finalMessage = whyResult(result, playerSelection, computerSelection)
    changeAnnoucement(round, result, playerSelection, computerSelection)
    limitHistory()
    addHistory(result, finalMessage, playerSelection, computerSelection)
})

const paperbtn = document.querySelector('#paper')
paperbtn.addEventListener('click',() => {
    round++
    let computerSelection = computerPlay(3)
    const playerSelection = 'Paper'
    result = playRound(playerSelection, computerSelection)
    finalMessage = whyResult(result, playerSelection, computerSelection)
    changeAnnoucement(round, result, playerSelection, computerSelection)
    limitHistory()
    addHistory(result, finalMessage, playerSelection, computerSelection)
})

const scissorsbtn = document.querySelector('#scissors')
scissorsbtn.addEventListener('click', () => {
    round++
    let computerSelection = computerPlay(3)
    const playerSelection = 'Scissors'
    result = playRound(playerSelection, computerSelection)
    finalMessage = whyResult(result, playerSelection, computerSelection)
    changeAnnoucement(round, result, playerSelection, computerSelection)
    limitHistory()
    addHistory(result, finalMessage, playerSelection, computerSelection)
})
