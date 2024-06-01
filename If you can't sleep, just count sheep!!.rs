fn count_sheep(n: u32) -> String {
    let mut res: String = String::new();
    for i in 1..n+1 {
        res.push_str(&(i.to_string() + " sheep..."));
    }

    res
}