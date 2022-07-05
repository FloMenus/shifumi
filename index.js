// Declaration des choix des signes des 2 entités

let playerSign = ''
let iaSign = ''


// Score des 2 entités

let scorePlayerDisplay = 0
let scoreIaDisplay = 0


// Nombre de rounds

let round = 1

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




// Importation des éléments HTML dans le JS




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

let playerSignContainer = document.getElementsByClassName("player-sign-container")
let iaSignContainer = document.getElementsByClassName("ia-sign-container")
let playerSignImage = document.getElementById("player-sign-display")
let iaSignImage = document.getElementById("ia-sign-display")

let historicSection = document.getElementsByClassName("historic-section")
let historic = document.getElementById("historic-elements")




// Choix du signe du joueur, qui va déclencher la fonction



let playerSignRockClicked = () => {

    if (shifumi('rock', iaSign) === 'player') {

        playerSign = 'rock'
        scorePlayerDisplay += 1
        playerScore.innerHTML = `${scorePlayerDisplay}`
        resultText.innerHTML = `Vous avez gagné !`
        buttons[0].classList.add("hidden")
        result[0].classList.remove("hidden")
        result[0].classList.remove("hidden")
        replay[0].classList.remove("hidden")
        playerSignDisplayAddFunction()
        iaSignDisplayAddFunction()
        playerSignContainer[0].classList.remove("hidden")
        iaSignContainer[0].classList.remove("hidden")
        historic.innerHTML += `<div>
            <h3>Round ${round}</h3>
            <br>
            <p>Joueur : ${playerSign}</p>
            <p>IA : ${iaSign}</p>
            <br>
            <p> Gagnant : Joueur</p>
        </div>`
        round+=1
    }

    else if (shifumi('rock', iaSign) === 'ia') {

        playerSign = 'rock'
        scoreIaDisplay += 1
        iaScore.innerHTML = `${scoreIaDisplay}`
        buttons[0].classList.add("hidden")
        result[0].classList.remove("hidden")
        replay[0].classList.remove("hidden")
        resultText.innerHTML = `l'IA a gagné`
        playerSignDisplayAddFunction()
        iaSignDisplayAddFunction()
        playerSignContainer[0].classList.remove("hidden")
        iaSignContainer[0].classList.remove("hidden")
        historic.innerHTML += `<div>
            <h3>Round ${round}</h3>
            <br>
            <p>Joueur : ${playerSign}</p>
            <p>IA : ${iaSign}</p>
            <br>
            <p> Gagnant : IA</p>
        </div>`
        round+=1
    }

    else {

        playerSign = 'rock'
        buttons[0].classList.add("hidden")
        result[0].classList.remove("hidden")
        replay[0].classList.remove("hidden")
        resultText.innerHTML = `Égalité`
        playerSignDisplayAddFunction()
        iaSignDisplayAddFunction()
        playerSignContainer[0].classList.remove("hidden")
        iaSignContainer[0].classList.remove("hidden")
        historic.innerHTML += `<div>
            <h3>Round ${round}</h3>
            <br>
            <p>Joueur : ${playerSign}</p>
            <p>IA : ${iaSign}</p>
            <br>
            <p> Égalité</p>
        </div>`
        round+=1
    }

}

let playerSignPaperClicked = () => {

    if (shifumi('paper', iaSign) === 'player') {

        playerSign = 'paper'
        scorePlayerDisplay += 1
        playerScore.innerHTML = `${scorePlayerDisplay}`
        buttons[0].classList.add("hidden")
        result[0].classList.remove("hidden")
        replay[0].classList.remove("hidden")
        resultText.innerHTML = `Vous avez gagné !`
        playerSignDisplayAddFunction()
        iaSignDisplayAddFunction()
        playerSignContainer[0].classList.remove("hidden")
        iaSignContainer[0].classList.remove("hidden")
        historic.innerHTML += `<div>
            <h3>Round ${round}</h3>
            <br>
            <p>Joueur : ${playerSign}</p>
            <p>IA : ${iaSign}</p>
            <br>
            <p> Gagnant : Joueur</p>
        </div>`
        round+=1
    }

    else if (shifumi('paper', iaSign) === 'ia') {

        playerSign = 'paper'
        scoreIaDisplay += 1
        iaScore.innerHTML = `${scoreIaDisplay}`
        buttons[0].classList.add("hidden")
        result[0].classList.remove("hidden")
        replay[0].classList.remove("hidden")
        resultText.innerHTML = `l'IA a gagné`
        playerSignDisplayAddFunction()
        iaSignDisplayAddFunction()
        playerSignContainer[0].classList.remove("hidden")
        iaSignContainer[0].classList.remove("hidden")
        historic.innerHTML += `<div>
            <h3>Round ${round}</h3>
            <br>
            <p>Joueur : ${playerSign}</p>
            <p>IA : ${iaSign}</p>
            <br>
            <p> Gagnant : IA</p>
        </div>`
        round+=1
    }

    else {

        playerSign = 'paper'
        buttons[0].classList.add("hidden")
        result[0].classList.remove("hidden")
        replay[0].classList.remove("hidden")
        resultText.innerHTML = `Égalité`
        playerSignDisplayAddFunction()
        iaSignDisplayAddFunction()
        playerSignContainer[0].classList.remove("hidden")
        iaSignContainer[0].classList.remove("hidden")
        historic.innerHTML += `<div>
            <h3>Round ${round}</h3>
            <br>
            <p>Joueur : ${playerSign}</p>
            <p>IA : ${iaSign}</p>
            <br>
            <p>Égalité</p>
        </div>`
        round+=1
    }
}

let playerSignScissorClicked = () => {

    if (shifumi('scissor', iaSign) === 'player') {

        playerSign = 'scissor'
        scorePlayerDisplay += 1
        playerScore.innerHTML = `${scorePlayerDisplay}`
        buttons[0].classList.add("hidden")
        result[0].classList.remove("hidden")
        replay[0].classList.remove("hidden")
        resultText.innerHTML = `Vous avez gagné !`
        playerSignDisplayAddFunction()
        iaSignDisplayAddFunction()
        playerSignContainer[0].classList.remove("hidden")
        iaSignContainer[0].classList.remove("hidden")
        historic.innerHTML += `<div>
            <h3>Round ${round}</h3>
            <br>
            <p>Joueur : ${playerSign}</p>
            <p>IA : ${iaSign}</p>
            <br>
            <p> Gagnant : Joueur</p>
        </div>`
        round+=1
    }

    else if (shifumi('scissor', iaSign) === 'ia') {

        playerSign = 'scissor'
        scoreIaDisplay += 1
        iaScore.innerHTML = `${scoreIaDisplay}`
        buttons[0].classList.add("hidden")
        result[0].classList.remove("hidden")
        replay[0].classList.remove("hidden")
        resultText.innerHTML = `l'IA a gagné`
        playerSignDisplayAddFunction()
        iaSignDisplayAddFunction()
        playerSignContainer[0].classList.remove("hidden")
        iaSignContainer[0].classList.remove("hidden")
        historic.innerHTML += `<div>
            <h3>Round ${round}</h3>
            <br>
            <p>Joueur : ${playerSign}</p>
            <p>IA : ${iaSign}</p>
            <br>
            <p> Gagnant : IA</p>
        </div>`
        round+=1
    }

    else {

        playerSign = 'scissor'
        buttons[0].classList.add("hidden")
        result[0].classList.remove("hidden")
        replay[0].classList.remove("hidden")
        resultText.innerHTML = `Égalité`
        playerSignDisplayAddFunction()
        iaSignDisplayAddFunction()
        playerSignContainer[0].classList.remove("hidden")
        iaSignContainer[0].classList.remove("hidden")
        historic.innerHTML += `<div>
            <h3>Round ${round}</h3>
            <br>
            <p>Joueur : ${playerSign}</p>
            <p>IA : ${iaSign}</p>
            <br>
            <p>Égalité</p>
        </div>`
        round+=1
    }

}


// Fonction qui va afficher l'image du signe du joueur

let playerSignDisplayAddFunction = () => {
    if (playerSign === 'rock') {
        playerSignImage.setAttribute("src", "images/rock.png")
    }
    else if (playerSign === 'paper') {
        playerSignImage.setAttribute("src", "images/paper.png")
    }
    else if (playerSign === 'scissor') {
        playerSignImage.setAttribute("src", "images/scissor.png")
    }
}

// Fonction qui va reset l'image du signe du joueur


let playerSignDisplayRemoveFunction = () => {
    if (playerSign === 'rock') {
        playerSignImage.removeAttribute("src", "images/rock.png")
    }
    else if (playerSign === 'paper') {
        playerSignImage.removeAttribute("src", "images/paper.png")
    }
    else if (playerSign === 'scissor') {
        playerSignImage.removeAttribute("src", "images/scissor.png")
    }
}

// Fonction qui va afficher l'image du signe de l'ia

let iaSignDisplayAddFunction = () => {
    if (iaSign === 'rock') {
        iaSignImage.setAttribute("src", "images/rock.png")
    }
    else if (iaSign === 'paper') {
        iaSignImage.setAttribute("src", "images/paper.png")
    }
    else if (iaSign === 'scissor') {
        iaSignImage.setAttribute("src", "images/scissor.png")
    }
}

let iaSignDisplayRemoveFunction = () => {
    if (iaSign === 'rock') {
        iaSignImage.removeAttribute("src", "images/rock.png")
    }
    else if (iaSign ==='paper') {
        iaSignImage.removeAttribute("src", "images/paper.png")
    }
    else if (iaSign ==='scissor') {
        iaSignImage.removeAttribute("src", "images/scissor.png")
    }
}

let retryClicked = () => {

    gameOverClicked = () => {
        
        round = 1
        scoreIaDisplay = 0
        scorePlayerDisplay = 0
        historic.innerHTML = ``

        playerScore.innerHTML = `${scorePlayerDisplay}`
        iaScore.innerHTML = `${scoreIaDisplay}`

        gameOver[0].classList.add("hidden")
        gameOverSentenceSection[0].classList.add("hidden")
        replay[0].classList.add("hidden")
        result[0].classList.add("hidden")

        buttons[0].classList.remove("hidden")
        playerSignDisplayRemoveFunction()

        iaSignDisplayRemoveFunction()
        playerSignContainer[0].classList.add("hidden")
        iaSignContainer[0].classList.add("hidden")
        iaSign = iaSignChoose()
    }

if (scoreIaDisplay === 3 || scorePlayerDisplay === 3) {
    gameOver[0].classList.remove("hidden")
    replay[0].classList.add("hidden")
        if (scoreIaDisplay === 3){
            gameOverSentence.innerHTML = `Vous avez perdu la partie :(`
        }
        else if (scorePlayerDisplay === 3) {
            gameOverSentence.innerHTML = `Vous remportez la victoire !`
        }
    gameOverSentenceSection[0].classList.remove("hidden")
    }

else {
    buttons[0].classList.remove("hidden")
    replay[0].classList.add("hidden")
    result[0].classList.add("hidden")
    playerSignDisplayRemoveFunction()
    iaSignDisplayRemoveFunction()
    playerSignContainer[0].classList.add("hidden")
    iaSignContainer[0].classList.add("hidden")
    iaSign = iaSignChoose()
    }

}

let historyClicked = () => {
    historicSection[0].classList.remove("hidden")
}

let historyCloseClicked = () => {
    historicSection[0].classList.add("hidden")
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
