function likes(names) {
  let num = 0;
  if (names.length == 0) {
    return `no one likes this`;
  } else if (names.length == 1) {
    return `${names[0]} likes this`;
  } else if (names.length == 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    for (let i = 2; i < names.length; i++) {
      num++;
    }
    return `${names[0]}, ${names[1]} and ${num} others like this`;
  }
}
