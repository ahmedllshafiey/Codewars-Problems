const sumSquareEvenRootOdd = (ns) => {
  let array = [];
  ns.forEach((element) => {
    if (element % 2 == 0) {
      array.push(element * element);
    } else if (Math.abs(element % 2 == 1)) {
      array.push(Math.sqrt(element));
    }
  });
  return Number(array.reduce((a, b) => a + b).toFixed(2));
};
