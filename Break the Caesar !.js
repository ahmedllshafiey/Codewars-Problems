function breakCaesar(st) {
  const string = st
      .toLowerCase()
      .replace(/[^a-z ]/g, "")
      .split(" "),
    lett = (s, n) =>
      String.fromCharCode(((s.charCodeAt() - 97 + 26 - n) % 26) + 97),
    wordy = (w, n) =>
      w
        .split("")
        .map((e) => lett(e, n))
        .join(""),
    f = (w) => (e) => e.length == w.length,
    sorty = (s) => (a, b) => s.indexOf(a[0]) - s.indexOf(b[0]);
  for (let i = 0; i < string.length; i++) {
    const word = string[i],
      shift = Array.from({ length: 26 }, (_, k) => lett(word[0], k + 1)),
      possibilities = [...WORDS].filter(f(word)).sort(sorty(shift));
    for (let j = 1; j < 26; j++) {
      const attempt = wordy(word, j);
      if (possibilities.some((e) => e == attempt)) {
        if (string.slice(i + 1).every((e) => [...WORDS].includes(wordy(e, j))))
          return j;
      }
    }
  }
}
