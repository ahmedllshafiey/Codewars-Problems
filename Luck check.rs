fn luck_check(ticket: &str) -> Option<bool> {
    if ticket.is_empty() {
        return None;
    }
    if !ticket.chars().all(|c| c.is_digit(10)) {
        return None;
    }

    let length = ticket.len();

    let (left, right) = if length % 2 == 0 {
        ticket.split_at(length / 2)
    } else {
        let half = length / 2;
        (&ticket[..half], &ticket[half + 1..])
    };

    let sum_left: u32 = left.chars().filter_map(|c| c.to_digit(10)).sum();
    let sum_right: u32 = right.chars().filter_map(|c| c.to_digit(10)).sum();

    Some(sum_left == sum_right)
}