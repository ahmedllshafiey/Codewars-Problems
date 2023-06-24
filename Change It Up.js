function changer(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 65) {
      result.push(str.charCodeAt(i));
    } else {
      let num = str.charCodeAt(i);
      result.push(str.charCodeAt(i) + 1);
    }
  }
  let string = String.fromCharCode(...result);
  result = [];
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] == "o" ||
      string[i] == "a" ||
      string[i] == "u" ||
      string[i] == "e" ||
      string[i] == "i" ||
      string[i] == "A" ||
      string[i] == "E" ||
      string[i] == "I" ||
      string[i] == "O" ||
      string[i] == "U"
    ) {
      result.push(string[i].toLocaleUpperCase());
    } else {
      result.push(string[i].toLocaleLowerCase());
    }
  }
  return result.join("").replace("{", "A").replace("[", "A");
}
