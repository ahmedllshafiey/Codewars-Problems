function spacey(array) {
  let result = [""];
  let target = "";
  for (let i = 0; i < array.length; i++) {
    target = `${array[i]}`;
    result.push(`${result[i]}${target}`);
  }

  return result.slice(1);
}