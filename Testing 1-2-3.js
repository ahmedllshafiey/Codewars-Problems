var number = function (array) {
  let result = [];
  let i = 1;
  array.forEach((element) => {
    element = `${i}: ${element}`;
    result.push(element);
    i++;
  });
  return result;
};