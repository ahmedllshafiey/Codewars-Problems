function deepCompare(obj1, obj2) {
  // Check if both inputs are objects
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return obj1 === obj2;
  }

  // Check if both inputs are null
  if (obj1 === null && obj2 === null) {
    return true;
  }

  // Check if either input is null (only one is null)
  if (obj1 === null || obj2 === null) {
    return false;
  }

  // Check if both inputs are arrays
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    // Compare array lengths
    if (obj1.length !== obj2.length) {
      return false;
    }

    // Compare array elements recursively
    for (let i = 0; i < obj1.length; i++) {
      if (!deepCompare(obj1[i], obj2[i])) {
        return false;
      }
    }

    return true;
  }

  // Compare object properties recursively
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Compare number of properties
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Compare properties and their values
  for (let key of keys1) {
    if (!keys2.includes(key) || !deepCompare(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}
