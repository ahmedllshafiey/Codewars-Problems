fn sum_of_n(n: i32) -> Vec<i32> {
    let mut res: Vec<i32> = Vec::new();
    let mut sum: i32 = 0;

    for i in 1..n.abs() + 2 {
        if n < 0 {
            res.push(sum);
            sum -= i;
        } else {
            res.push(sum);
            sum += i;
        }
    }

    res
}
