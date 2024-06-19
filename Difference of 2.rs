fn twos_difference(arr: &[u32]) -> Vec<(u32, u32)> {
    
    let mut res: Vec<(u32, u32)> = vec![];
    let mut arr = arr.to_vec();

    arr.sort();

    for i in 0..arr.len() {
        for k in 0 + i..arr.len() {
            if (arr[i] as i32 - arr[k] as i32).abs() == 2 {
                res.push((arr[i], arr[k]));
            }
        }
    }

    res
}