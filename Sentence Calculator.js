function lettersToNumbers(s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (65 <= s.charCodeAt(i) && s.charCodeAt(i) <= 90) {
      let num = (s.charCodeAt(i) - 64) * 2;
      result = result + num;
      num = 0;
    } else if (97 <= s.charCodeAt(i) && s.charCodeAt(i) <= 122) {
      let num = s.charCodeAt(i) - 96;
      result = result + num;
      num = 0;
    } else if (48 <= s.charCodeAt(i) && s.charCodeAt(i) <= 57) {
      let num = s.charCodeAt(i) - 48;
      result = result + num;
      num = 0;
    }
  }
  return result;
}