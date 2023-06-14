function printerError(s) {
  let num = 0;
  s.split("").forEach((element) => {
    if (element.charCodeAt() > 109) {
      num++;
    }
  });

  return `${num}/${s.split("").length}`;
}
