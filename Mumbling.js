function accum(s) {
  let string = s.split("");
  let series = "";
  let result = "";

  for (let i = 0; i < string.length; i++) {
    for (let k = -1; k < i; k++) {
      if (k === -1) {
        series = `${string[i].toUpperCase()}${series}`;
      } else {
        series = `${string[i].toLowerCase()}${series}`;
      }
    }
    if (i < string.length - 1) {
      series = `-${series}`;
    }
  }

  return series.split("").reverse().join("").slice();
}
