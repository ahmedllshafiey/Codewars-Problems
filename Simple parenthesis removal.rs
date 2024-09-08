fn solve_expression(expr: &str) -> String {
    let mut stack = vec![1];
    let mut result = String::new();
    let mut current_sign = 1;

    for c in expr.chars() {
        match c {
            '+' => {
                current_sign = stack.last().unwrap_or(&1) * 1;
            }
            '-' => {
                current_sign = stack.last().unwrap_or(&1) * -1;
            }
            '(' => {
                stack.push(current_sign);
            }
            ')' => {
                stack.pop();
            }
            _ => {
                if current_sign == 1 {
                    result.push('+');
                } else {
                    result.push('-');
                }
                result.push(c);
            }
        }
    }

    if result.starts_with('+') {
        result.remove(0);
    }

    result
}