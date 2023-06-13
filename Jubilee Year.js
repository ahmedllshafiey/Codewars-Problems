function isJubilee(year) {
  const date = new Date(`July 25, ${year}`);
  let day = date.getDay();
  if (day === 0) {
    return true;
  } else {
    return false;
  }
}
