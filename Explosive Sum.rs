use std::convert::TryInto;

fn exp_sum(n: u64) -> u64 {
    let n_usize = match n.try_into() {
        Ok(val) => val,
        Err(_) => {
            return 0;
        }
    };

    let mut partitions = vec![0u64; n_usize + 1];
    partitions[0] = 1;

    for i in 1..=n_usize {
        for j in i..=n_usize {
            partitions[j] += partitions[j - i];
        }
    }

    partitions[n_usize]
}
