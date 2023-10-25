function checkScore(){
    let homeScore = document.getElementById("homeScore").textContent
    let guestScore = document.getElementById("guestScore").textContent
    let homeText = document.getElementById("homeScore")
    let guestText = document.getElementById("guestScore")

    if(parseInt(homeScore) > parseInt(guestScore)){
        homeText.style.color = "#34D399"
        guestText.style.color = "#f94f6d"
    } else if (parseInt(homeScore) < parseInt(guestScore)) {
        homeText.style.color = "#f94f6d"
        guestText.style.color = "#34D399"
    } else {
        homeText.style.color = "#f94f6d"
        guestText.style.color = "#f94f6d"
    }
}

function addToHome(value) {
    let homeScore = document.getElementById("homeScore").textContent
    homeScore = parseInt(homeScore)
    homeScore += value
    document.getElementById("homeScore").textContent = homeScore
    checkScore()
}

function addToGuest(value) {
    let guestScore = document.getElementById("guestScore").textContent
    guestScore = parseInt(guestScore)
    guestScore += value
    document.getElementById("guestScore").textContent = guestScore
    checkScore()
}

function newGame(){
    document.getElementById("homeScore").textContent = 0
    document.getElementById("guestScore").textContent = 0
    checkScore()
}