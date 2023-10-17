function smallest(n) {
  const numStr = n.toString();
  let minNum = n;
  let minI = 0;
  let minJ = 0;

  for (let i = 0; i < numStr.length; i++) {
    for (let j = 0; j <= numStr.length; j++) {
      const temp = numStr.slice(0, i) + numStr.slice(i + 1);
      const result = temp.slice(0, j) + numStr[i] + temp.slice(j);
      if (parseInt(result, 10) < minNum) {
        minNum = parseInt(result, 10);
        minI = i;
        minJ = j;
      }
    }
  }

  return [minNum, minI, minJ];
}
