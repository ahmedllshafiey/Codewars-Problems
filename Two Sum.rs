fn two_sum(numbers: &[i32], target: i32) -> (usize, usize) {
    for (i, &num1) in numbers.iter().enumerate() {
        for (j, &num2) in numbers.iter().enumerate().skip(i + 1) {
            if num1 + num2 == target {
                return (i, j);
            }
        }
    }
    (0, 0)
}