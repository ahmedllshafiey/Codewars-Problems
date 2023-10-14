function allSquaredPairs(num) {
  const result = [];
  if (num < 0) {
    return [];
  }

  const max = Math.floor(Math.sqrt(num));

  for (let i = 0; i <= max; i++) {
    const remaining = num - i * i;
    const remainingSqrt = Math.floor(Math.sqrt(remaining));

    if (remainingSqrt * remainingSqrt === remaining && remainingSqrt >= i) {
      result.push([i, remainingSqrt]);
    }
  }

  return result;
}