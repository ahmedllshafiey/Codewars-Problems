function minimizePenalty(a_list) {
  const sortedStrings = a_list.map(String).sort((a, b) => a + b - (b + a));
  const result = sortedStrings.join("");
  return result;
}
