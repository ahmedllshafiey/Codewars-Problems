function isInteresting(mileage, awesomePhrases) {
    // Helper function to check if a number is a palindrome
    function isPalindrome(num) {
        const str = num.toString();
        return str === str.split('').reverse().join('');
    }

    // Helper function to check if all digits after the first are zeros
    function isFollowedByAllZeros(num) {
        return /^([1-9])0+$/.test(num.toString());
    }

    // Helper function to check if all digits are the same
    function isAllSameDigits(num) {
        return /^([0-9])\1+$/.test(num.toString());
    }

    // Helper function to check if the digits are sequential incrementing
    function isSequentialIncrementing(num) {
        const sequentialInc = '1234567890';
        return sequentialInc.includes(num.toString());
    }

    // Helper function to check if the digits are sequential decrementing
    function isSequentialDecrementing(num) {
        const sequentialDec = '9876543210';
        return sequentialDec.includes(num.toString());
    }

    // Helper function to check if the number matches one of the awesome phrases
    function isAwesomePhrase(num) {
        return awesomePhrases.includes(num);
    }

    // Helper function to check if a number is interesting
    function isInterestingNumber(num) {
        return num > 99 && (
            isFollowedByAllZeros(num) ||
            isAllSameDigits(num) ||
            isSequentialIncrementing(num) ||
            isSequentialDecrementing(num) ||
            isPalindrome(num) ||
            isAwesomePhrase(num)
        );
    }

    // Check current mileage and the next two mileages
    if (isInterestingNumber(mileage)) {
        return 2;
    } else if (isInterestingNumber(mileage + 1) || isInterestingNumber(mileage + 2)) {
        return 1;
    } else {
        return 0;
    }
}