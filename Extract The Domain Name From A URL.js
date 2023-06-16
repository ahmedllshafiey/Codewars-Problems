function domainName(url) {
  let array = url.split("");
  if (array[0] == !"w" || array[0] == !"h") {
    array.unshift("/");
  } else if (array[0] == "w" && array[1] == "w" && array[2] == "w") {
    array.shift();
    array.shift();
    array.shift();
    array.shift();
  } else if (array[7] == "w" && array[8] == "w" && array[9] == "w") {
    array.shift();
    array.shift();
    array.shift();
    array.shift();
    array.shift();
    array.shift();
    array.shift();
    array.shift();
    array.shift();
    array.shift();
    array.shift();
    array.unshift("/");
  } else if (array[8] == "w" && array[9] == "w" && array[10] == "w") {
    array.shift();
    array.shift();
    array.shift();
    array.shift();
    array.shift();
    array.shift();
    array.shift();
    array.shift();
    array.shift();
    array.shift();
    array.shift();
    array.shift();
    array.unshift("/");
  } else if (
    array[0] !== "h" &&
    array[1] !== "t" &&
    array[2] !== "t" &&
    array[3] !== "p"
  ) {
    array.unshift("/");
  } else if (array[0] == 8) {
    array.unshift("/");
  }
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == ".") {
      break;
    } else if (i > array.indexOf("/")) {
      result.push(array[i]);
    }
  }
  if (result[0] == "/") {
    result.shift();
  }
  return result.join("");
}
