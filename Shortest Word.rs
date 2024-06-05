fn find_short(s: &str) -> u32 {
    let mut res: Vec<u32> = Vec::new();
    for word in s.split_whitespace() {
        res.push(word.len() as u32);
    }

    *res.iter().min().unwrap()
}
