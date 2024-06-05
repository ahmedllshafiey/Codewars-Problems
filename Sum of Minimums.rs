fn sum_of_minimums(numbers: [[u8; 4]; 4]) -> u8 {
    let mut total: u8 = 0;
    for i in numbers {
        total += i.iter().min().unwrap();
    }
    total
}
