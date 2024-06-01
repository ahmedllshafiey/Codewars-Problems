fn powers_of_two(n: u8) -> Vec<u128> {
    let mut res: Vec<u128> = Vec::new();

    for i in 0..n+1 {
        res.push(2u128.pow(i.into()));
    }

    res
}
