fn find_nb(m: u64) -> i32 {
    let mut n = 1;
    let mut count= 1;
    while n < m  {
        n = n + u64::pow(count + 1, 3);
        count += 1;
    }

    if n == m {
        return count as i32;
    } else {
        return -1;
    }
}