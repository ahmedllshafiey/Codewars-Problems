use std::collections::HashSet;

fn merge_arrays(arr1: &[i32], arr2: &[i32]) -> Vec<i32> {
    let mut result: Vec<i32> = Vec::new();

    for i in arr1 {
        result.push(*i);
    }

    for i in arr2 {
        result.push(*i);
    }

    let unique: HashSet<i32> = result.into_iter().collect();
    let mut unique_vec: Vec<i32> = unique.into_iter().collect();
    unique_vec.sort();
    unique_vec
}
