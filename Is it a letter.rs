fn is_it_letter(c: char) -> bool {
    match c {
        'A'..='Z' | 'a'..='z' => true,
        _ => false,
    }
}
