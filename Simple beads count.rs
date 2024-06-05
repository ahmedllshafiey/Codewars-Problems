fn count_red_beads(n: u32) -> u32 {
    if n < 2 {
        0
    } else {
        (n * 2) - 2
    }
}
