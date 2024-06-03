fn square_sum(vec: Vec<i32>) -> i32 {
    let mut total: i32 = 0;
    for i in vec {
        total = total + i * i;
    }

    total
}
