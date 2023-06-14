function mostLikely(prob1, prob2) {
  let first = prob1.split(":")
  let second = prob2.split(":");

  if(first[0]/first[1] > second[0]/second[1]){
    return true
  }else{
    return false
  }
}
