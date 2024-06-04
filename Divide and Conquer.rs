use either::Either;

fn div_con(arr: &[Either<i32, String>]) -> i32 {
    let mut str_total: i32 = 0;
    let mut num_total: i32 = 0;

    for i in arr {
        match i {
            Either::Left(num) => num_total += num.clone(),
            Either::Right(str) => str_total += str.parse::<i32>().unwrap(),
        }
    }

    num_total - str_total
}
