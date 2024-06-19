fn sort_array(arr: &[i32]) -> Vec<i32> {
    let mut odd_vec: Vec<i32> = arr.iter().filter(|&&x| x % 2 != 0).copied().collect();
    odd_vec.sort();

    let mut odd_index = 0;
    arr.iter()
        .map(|&x| {
            if x % 2 != 0 {
                let sorted_odd = odd_vec[odd_index];
                odd_index += 1;
                sorted_odd
            } else {
                x
            }
        })
        .collect()
}