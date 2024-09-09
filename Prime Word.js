function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

function primeWord(pairs) {
    const result = [];
    
    pairs.forEach(([word, num]) => {
        let primeFound = false;
        
        for (let char of word) {
            const asciiValue = char.charCodeAt(0) + num;
            if (isPrime(asciiValue)) {
                primeFound = true;
                break;
            }
        }
        
        result.push(primeFound ? 1 : 0);
    });
    
    return result;
}