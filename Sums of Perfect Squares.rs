fn is_perfect_square(x: u64) -> bool {
    let s = (x as f64).sqrt() as u64;
    s * s == x
}

fn sum_of_squares(n: u64) -> u64 {

    if is_perfect_square(n) {
        return 1;
    }

    let mut i = 1;
    while i * i <= n {
        if is_perfect_square(n - i * i) {
            return 2;
        }
        i += 1;
    }

    let mut num = n;
    while num % 4 == 0 {
        num /= 4;
    }
    if num % 8 == 7 {
        return 4;
    }

    3
}