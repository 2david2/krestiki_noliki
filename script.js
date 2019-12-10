player=[]
aiMoves=[]

function tap(clicked_id) {
    if(player.includes(clicked_id)==false & aiMoves.includes(parseInt(clicked_id))==false){
        document.getElementById(clicked_id).style.backgroundImage="url(krestik.jpg)"
        player.push(clicked_id)
        ai()
        endGame()
    }

}

function ai() {
    id = 0
    while (true) {
        id = Math.floor(Math.random() * 9) + 1
        if (player.length + aiMoves.length >= 8) {
            break
        } else if (player.includes(id.toString()) == false & aiMoves.includes(id) == false) {
            document.getElementById(id).style.backgroundImage = "url(nolik.jpg)"
            aiMoves.push(id)
            break
            endGame()
        }
    }
}

    function endGame() {
        if (player.includes("1") & player.includes("2") & player.includes("3") |
            player.includes("4") & player.includes("5") & player.includes("6") |
            player.includes("7") & player.includes("8") & player.includes("9") |
            player.includes("1") & player.includes("4") & player.includes("7") |
            player.includes("2") & player.includes("5") & player.includes("8") |
            player.includes("3") & player.includes("6") & player.includes("9") |
            player.includes("1") & player.includes("5") & player.includes("9") |
            player.includes("3") & player.includes("5") & player.includes("7")) {
            alert("you win!!!")
        }
        else if (aiMoves.includes("1") & aiMoves.includes("2") & aiMoves.includes("3") |
            aiMoves.includes("4") & aiMoves.includes("5") & aiMoves.includes("6") |
            aiMoves.includes("7") & aiMoves.includes("8") & aiMoves.includes("9") |
            aiMoves.includes("1") & aiMoves.includes("4") & aiMoves.includes("7") |
            aiMoves.includes("2") & aiMoves.includes("5") & aiMoves.includes("8") |
            aiMoves.includes("3") & aiMoves.includes("6") & aiMoves.includes("9") |
            aiMoves.includes("1") & aiMoves.includes("5") & aiMoves.includes("9") |
            aiMoves.includes("3") & aiMoves.includes("5") & aiMoves.includes("7")) {
            alert("you lose!!!")
        }
    }



// 1 & 2 & 3 |
// 4 5 6
// 7 8 9
// 1 4 7
// 2 5 8
// 3 6 9
// 1 5 9
// 3 5 7