function noIfsNoButs(a, b) {
  switch (a === b) {
    case true:
      return `${a} is equal to ${b}`;
    case false:
      switch (Math.max(a, b)) {
        case a:
          return `${a} is greater than ${b}`;
        case b:
          return `${a} is smaller than ${b}`;
      }
  }
}
