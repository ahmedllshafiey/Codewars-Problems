fn divisors(integer: u32) -> Result<Vec<u32>, String> {
    let mut res: Vec<u32> = Vec::new();
    for i in 2..integer {
        if integer % i == 0 {
            res.push(i);
        }
    }
    if res.len() == 0 {
        return Err(integer.to_string() + " is prime");
    }
    Ok(res)
}
