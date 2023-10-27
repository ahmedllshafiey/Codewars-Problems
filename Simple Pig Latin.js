function pigIt(str) {
  const words = str.split(" ");
  const transformWord = (word) => {
    if (/^[A-Za-z]+$/.test(word)) {
      return word.slice(1) + word[0] + "ay";
    } else return word;
  };
  const transformedWords = words.map(transformWord);
  return transformedWords.join(" ");
}
