function solution(input, markers) {
    return input.split('\n').map(line => {
      let cleanLine = line;
      if (markers.length > 0) {
        markers.forEach(marker => {
          if (cleanLine.includes(marker)) {
            cleanLine = cleanLine.split(marker)[0];
          }
        });
      }
      return cleanLine.trimEnd();
    }).join('\n');
  }