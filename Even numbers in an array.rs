fn even_numbers(array: &Vec<i32>, number: usize) -> Vec<i32> {
    let mut res: Vec<i32> = Vec::new();
    let mut count: usize = number;
    for i in array.iter().rev() {
        if i % 2 == 0 && count != 0 {
            res.push(*i);
            count -= 1;
        }
    }

    res.reverse();

    res
}
