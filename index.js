// Declaration des choix des signes des 2 entités

let playerSign = ''
let iaSign= ''



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
console.log (iaSign)




// Choix du signe du joueur, qui va déclencher la fonction




let buttons = document.getElementsByClassName("buttons-sign-regroup")
let playerScore = document.getElementById("player-score")
let iaScore = document.getElementById("ia-score")
let result = document.getElementsByClassName("result")
let resultText = document.getElementById("text-result")
let replay = document.getElementsByClassName("button-section")

const playerSignRockClicked = () => {

    if (shifumi('rock',iaSign) === 'player') {
    
    playerScore.innerHTML = `1`
    buttons[0].classList.add("hidden")
    result[0].classList.remove("hidden")
    result[0].classList.remove("hidden")
    replay[0].classList.remove("hidden")
    resultText.innerHTML = `Vous avez gagné !`
    }

    else if (shifumi('rock',iaSign) === 'ia') {
    
    iaScore.innerHTML = `1`
    buttons[0].classList.add("hidden")
    result[0].classList.remove("hidden")
    replay[0].classList.remove("hidden")
    resultText.innerHTML = `l'IA a gagné`
    }

    else {
    
    buttons[0].classList.add("hidden")
    result[0].classList.remove("hidden")
    replay[0].classList.remove("hidden")
    resultText.innerHTML = `Égalité`
    }

}

const playerSignPaperClicked = () => {
    if (shifumi('paper',iaSign) === 'player') {
    
        playerScore.innerHTML = `1`
        buttons[0].classList.add("hidden")
        result[0].classList.remove("hidden")
        replay[0].classList.remove("hidden")
        resultText.innerHTML = `Vous avez gagné !`
        }
    
        else if (shifumi('paper',iaSign) === 'ia') {
        
        iaScore.innerHTML = `1`
        buttons[0].classList.add("hidden")
        result[0].classList.remove("hidden")
        replay[0].classList.remove("hidden")
        resultText.innerHTML = `l'IA a gagné`
        }
    
        else {
        
        buttons[0].classList.add("hidden")
        result[0].classList.remove("hidden")
        replay[0].classList.remove("hidden")
        resultText.innerHTML = `Égalité`
        }
}
const playerSignScissorClicked = () => {
    if (shifumi('scissor',iaSign) === 'player') {
    
        playerScore.innerHTML = `1`
        buttons[0].classList.add("hidden")
        result[0].classList.remove("hidden")
        replay[0].classList.remove("hidden")
        resultText.innerHTML = `Vous avez gagné !`
        }
    
        else if (shifumi('scissor',iaSign) === 'ia') {
        
        iaScore.innerHTML = `1`
        buttons[0].classList.add("hidden")
        result[0].classList.remove("hidden")
        replay[0].classList.remove("hidden")
        resultText.innerHTML = `l'IA a gagné`
        }
    
        else {
        
        buttons[0].classList.add("hidden")
        result[0].classList.remove("hidden")
        replay[0].classList.remove("hidden")
        resultText.innerHTML = `Égalité`
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

const retryClicked = () => {
    buttons[0].classList.remove("hidden")
    replay[0].classList.add("hidden")
    result[0].classList.add("hidden")
}