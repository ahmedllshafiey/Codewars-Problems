function points(games) {
    let sum = 0
    games.forEach(element => {
        const game = element.split(":")
        if(game[0]>game[1]){
            sum = sum + 3
        }else if(game[0]===game[1]){
            sum++
        }else{
            sum = sum + 0
        }
    });

    return sum
}