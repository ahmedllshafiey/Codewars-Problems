fn find_smallest_int(arr: &[i32]) -> i32 {
    let mut small: i32 = arr[0];
    for i in 1..arr.len() {
        if small > arr[i] {
            small = arr[i];
        }
    }

    small
}