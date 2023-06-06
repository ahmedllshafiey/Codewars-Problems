function likeOrDislike(buttons) {
    let value = "Nothing"
    if(buttons){
        buttons.forEach(element => {
            if (element === "Like" && value !== "Like") {
              value = "Like";
            } else if (element === "Dislike" && value != "Dislike") {
              value = "Dislike";
            } else if (element === "Like" && value === "Like") {
              value = "Nothing";
            } else if (element === "Dislike" && value === "Dislike") {
              value = "Nothing";
            }
        });
        return value
    }else{
        return "Nothing"
    }
}