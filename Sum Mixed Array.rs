use either::Either;

fn sum_mix(arr: &[Either<i32, String>]) -> i32 {
    let mut total: i32 = 0;

    for i in arr {
        match i {
            Either::Left(num) => total += num,
            Either::Right(text) => {
                if let Ok(num) = text.parse::<i32>() {
                    total += num;
                }
            }
        }
    }

    total
}