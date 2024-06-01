fn fake_bin(s: &str) -> String {
    let mut result = String::new();

    for c in s.chars() {
        if let Some(digit) = c.to_digit(10) {
            if digit < 5 {
                result.push('0');
            } else {
                result.push('1');
            }
        }
    }

    result
}