fn persistence(num: u64) -> u64 {
    let mut num = num;
    let mut count = 0;

    while num >= 10 {
        num = num
            .to_string()
            .chars()
            .map(|c| c.to_digit(10).unwrap() as u64)
            .product();
        count += 1;
    }

    count
}