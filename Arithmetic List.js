function seqlist(first, c, l) {
  let list = [first]
  for(let j = 0; j < l-1; j++) {
    ele = list[list.length - 1] + c
    list.push(ele)
  }
  
  return list
}