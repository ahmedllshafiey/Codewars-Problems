const meeting = (s) =>
  s
    .toUpperCase()
    .split(";")
    .map((name) => name.split(":").reverse())
    .sort()
    .reduce((acc, name) => (acc += `(${name[0]}, ${name[1]})`), "");
