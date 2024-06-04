fn check_exam(arr_a: &[&str], arr_b: &[&str]) -> i64 {
    let mut score: i64 = 0;

    for i in 0..arr_a.len() {
        if arr_a[i] == arr_b[i] {
            score += 4;
        } else if arr_b[i] == "" {
            continue;
        } else {
            score -= 1;
        }
    }

    if score < 0 {
        score = 0;
    }

    score
}
