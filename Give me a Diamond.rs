fn print(n: i32) -> Option<String> {
    if n <= 0 || n % 2 == 0 {
        return None;
    }

    let mut result = String::new();
    let mid = n / 2;
    
    for i in 0..n {
        let stars = if i <= mid { 2 * i + 1 } else { 2 * (n - i - 1) + 1 };
        let spaces = (n - stars) / 2;
        result.push_str(&" ".repeat(spaces as usize));
        result.push_str(&"*".repeat(stars as usize));
        result.push('\n');
    }

    Some(result)
}