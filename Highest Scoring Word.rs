fn high(input: &str) -> &str {
    let mut max = 0;
    let mut res = "";

    for word in input.split(' ') {
        let count: i32 = word
            .chars()
            .map(|c| c.to_ascii_lowercase() as i32 - 96)
            .sum();

        println!("{}:{}", word, count);

        if count > max {
            max = count;
            res = word;
        }
    }

    res
}
