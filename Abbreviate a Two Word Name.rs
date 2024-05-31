fn abbrev_name(name: &str) -> String {
    let mut result: String = String::new();
    
    for word in name.split_whitespace() {
        if let Some(first_char) = word.chars().next() {
            result.push(first_char.to_uppercase().next().unwrap());
            result.push('.');
        }
    }
    
    result.pop();
    result
}
