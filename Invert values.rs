fn invert(values: &[i32]) -> Vec<i32> {
    let mut result: Vec<i32> = Vec::new();
    for &i in values {
        result.push(-i);
    }
    result
}