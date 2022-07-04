// Declaration des choix des signes des 2 entités

let playerSign = ''
let iaSign = ''


// Score des 2 entités

let scorePlayerDisplay = 0
let scoreIaDisplay = 0

// Choix du signe de l'ia


let iaSignChoose = () => {
    let randomNumero = Math.floor(Math.random() * 3)
    let numeroToSign = ''

    if (randomNumero === 0) {
        numeroToSign = 'rock'
    }

    else if (randomNumero === 1) {
        numeroToSign = 'paper'
    }

    else {
        numeroToSign = 'scissor'
    }

    return numeroToSign
}


iaSign = iaSignChoose()
console.log(iaSign)




// Choix du signe du joueur, qui va déclencher la fonction




let buttons = document.getElementsByClassName("buttons-sign-regroup")

let playerScore = document.getElementById("player-score")
let iaScore = document.getElementById("ia-score")

let result = document.getElementsByClassName("result")
let resultText = document.getElementById("text-result")

let replay = document.getElementsByClassName("button-section")

let gameOverSentenceSection= document.getElementsByClassName("game-over")
let gameOverSentence = document.getElementById("game-over-sentence")
let gameOver = document.getElementsByClassName("game-over-section")
let gameOverButton = document.getElementById("button-game-over")





let playerSignRockClicked = () => {

    if (shifumi('rock', iaSign) === 'player') {

        scorePlayerDisplay += 1
        playerScore.innerHTML = `${scorePlayerDisplay}`
        buttons[0].classList.add("hidden")
        result[0].classList.remove("hidden")
        result[0].classList.remove("hidden")
        replay[0].classList.remove("hidden")
        resultText.innerHTML = `Vous avez gagné !`
        iaSign = iaSignChoose()
    }

    else if (shifumi('rock', iaSign) === 'ia') {

        scoreIaDisplay += 1
        iaScore.innerHTML = `${scoreIaDisplay}`
        buttons[0].classList.add("hidden")
        result[0].classList.remove("hidden")
        replay[0].classList.remove("hidden")
        resultText.innerHTML = `l'IA a gagné`
        iaSign = iaSignChoose()
    }

    else {

        buttons[0].classList.add("hidden")
        result[0].classList.remove("hidden")
        replay[0].classList.remove("hidden")
        resultText.innerHTML = `Égalité`
        iaSign = iaSignChoose()
    }

}

let playerSignPaperClicked = () => {

    if (shifumi('paper', iaSign) === 'player') {

        scorePlayerDisplay += 1
        playerScore.innerHTML = `${scorePlayerDisplay}`
        buttons[0].classList.add("hidden")
        result[0].classList.remove("hidden")
        replay[0].classList.remove("hidden")
        resultText.innerHTML = `Vous avez gagné !`
        iaSign = iaSignChoose()
    }

    else if (shifumi('paper', iaSign) === 'ia') {

        scoreIaDisplay += 1
        iaScore.innerHTML = `${scoreIaDisplay}`
        buttons[0].classList.add("hidden")
        result[0].classList.remove("hidden")
        replay[0].classList.remove("hidden")
        resultText.innerHTML = `l'IA a gagné`
        iaSign = iaSignChoose()
    }

    else {

        buttons[0].classList.add("hidden")
        result[0].classList.remove("hidden")
        replay[0].classList.remove("hidden")
        resultText.innerHTML = `Égalité`
        iaSign = iaSignChoose()
    }
}

let playerSignScissorClicked = () => {

    if (shifumi('scissor', iaSign) === 'player') {

        scorePlayerDisplay += 1
        playerScore.innerHTML = `${scorePlayerDisplay}`
        buttons[0].classList.add("hidden")
        result[0].classList.remove("hidden")
        replay[0].classList.remove("hidden")
        resultText.innerHTML = `Vous avez gagné !`
        iaSign = iaSignChoose()
    }

    else if (shifumi('scissor', iaSign) === 'ia') {

        scoreIaDisplay += 1
        iaScore.innerHTML = `${scoreIaDisplay}`
        buttons[0].classList.add("hidden")
        result[0].classList.remove("hidden")
        replay[0].classList.remove("hidden")
        resultText.innerHTML = `l'IA a gagné`
        iaSign = iaSignChoose()
    }

    else {

        buttons[0].classList.add("hidden")
        result[0].classList.remove("hidden")
        replay[0].classList.remove("hidden")
        resultText.innerHTML = `Égalité`
        iaSign = iaSignChoose()
    }

}




let retryClicked = () => {

    gameOverClicked = () => {
        scoreIaDisplay = 0
        scorePlayerDisplay = 0
        playerScore.innerHTML = `${scorePlayerDisplay}`
        iaScore.innerHTML = `${scoreIaDisplay}`
        gameOver[0].classList.add("hidden")
        gameOverSentenceSection[0].classList.add("hidden")
        replay[0].classList.add("hidden")
        result[0].classList.add("hidden")
        buttons[0].classList.remove("hidden")
        iaSign = iaSignChoose()
    }

if (scoreIaDisplay === 3 || scorePlayerDisplay === 3) {
    gameOver[0].classList.remove("hidden")
    replay[0].classList.add("hidden")
    gameOverSentenceSection[0].classList.remove("hidden")
    }

else {
    buttons[0].classList.remove("hidden")
    replay[0].classList.add("hidden")
    result[0].classList.add("hidden")
    console.log(iaSign)
    }

}




// Fonction qui détermine un gagnant

let resultShifumi = ''

let shifumi = (playerSign, iaSign) => {


    if (playerSign === 'rock' && iaSign === 'rock') {
        resultShifumi = 'draw'
    }

    else if (playerSign === 'paper' && iaSign === 'paper') {
        resultShifumi = 'draw'
    }

    else if (playerSign === 'scissor' && iaSign === 'scissor') {
        resultShifumi = 'draw'
    }

    else if (playerSign === 'paper' && iaSign === 'rock') {
        resultShifumi = 'player'
    }

    else if (playerSign === 'rock' && iaSign === 'scissor') {
        resultShifumi = 'player'
    }

    else if (playerSign === 'scissor' && iaSign === 'paper') {
        resultShifumi = 'player'
    }

    else if (playerSign === 'rock' && iaSign === 'paper') {
        resultShifumi = 'ia'
    }

    else if (playerSign === 'paper' && iaSign === 'scissor') {
        resultShifumi = 'ia'
    }

    else if (playerSign === 'scissor' && iaSign === 'rock') {
        resultShifumi = 'ia'
    }

    else {
        resultShifumi === 'Error'
    }


    return resultShifumi
}
