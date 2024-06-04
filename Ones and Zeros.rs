fn binary_slice_to_number(slice: &[u32]) -> u32 {
    let mut decimal_value: u32 = 0;
    for (i, &digit) in slice.iter().rev().enumerate() {
        if digit == 1 {
            decimal_value += 1 << i;
        }
    }
    decimal_value
}
