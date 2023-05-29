function pillars(numPill, dist, width) {
  if (numPill > 1) {
    const total_dist = (numPill * width) + (dist * 100 * (numPill - 1));
    return total_dist - (2 * width);
  } else {
    return 0;
  }
}

console.log(pillars(2, 20, 25));