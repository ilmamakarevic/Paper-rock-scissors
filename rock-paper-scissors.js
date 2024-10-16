let score = JSON.parse(localStorage.getItem('score')) || { //gets the value that was saved earlier out of the local storage
    wins: 0,
    loses: 0,
    ties: 0
};

updateScoreElement();

// if(score === null) { // (score = null) is same as !score => true
//     score = {
//         wins: 0,
//         loses: 0,
//         ties: 0
//     };
// }

function playGame(playerMove) {

    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lost.';
        }
        else if (computerMove === 'paper') {
            result = 'You won!';
        }
        else {
            result = 'Tie.';
        }
    }
    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You won!';
        }
        else if (computerMove === 'paper') {
            result = 'Tie.';
        }
        else {
            result = 'You lost.';
        }
    }
    else {
        if (computerMove === 'rock') {
            result = 'Tie.';
        }
        else if (computerMove === 'paper') {
            result = 'You lost.';
        }
        else {
            result = 'You won!';
        }
    }

    if (result === 'You won!') {
        score.wins += 1;
    }
    else if (result === 'You lost.') {
        score.loses += 1;
    }
    else {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score)); //to save string in local storage

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"> : <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;

}


function updateScoreElement() {
    document.querySelector('.score').innerHTML = `Wins ${score.wins}, Loses ${score.loses}, Ties ${score.ties}`

}

function pickComputerMove() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    }
    else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}

function clearContent() {
    document.getElementById('clear-result').innerHTML = '';
    document.getElementById('clear-moves').innerHTML = '';
}