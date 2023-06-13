function toAcronym(inp) {
  let result = [];
  let array = inp.split(" ");
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    result.push(word[0]);
  }
  return result.join("").toUpperCase();
}
