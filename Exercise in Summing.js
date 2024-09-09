function minimumSum(values, n) {
    if (values.length === 0 || n === 0) {
        return 0;
    }

    n = Math.min(n, values.length);

    const sortedValues = [...values].sort((a, b) => a - b);
    return sortedValues.slice(0, n).reduce((sum, num) => sum + num, 0);
}

function maximumSum(values, n) {
    if (values.length === 0 || n === 0) {
        return 0;
    }

    n = Math.min(n, values.length);

    const sortedValues = [...values].sort((a, b) => b - a);
    return sortedValues.slice(0, n).reduce((sum, num) => sum + num, 0);
}