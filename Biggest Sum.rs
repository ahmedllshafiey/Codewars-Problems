fn find_sum(matrix: &[Vec<u32>]) -> u32 {
    let m = matrix.len();
    let mut dp = vec![vec![0; m]; m];
    dp[0][0] = matrix[0][0];

    for j in 1..m {
        dp[0][j] = dp[0][j - 1] + matrix[0][j];
    }

    for i in 1..m {
        dp[i][0] = dp[i - 1][0] + matrix[i][0];
    }

    for i in 1..m {
        for j in 1..m {
            dp[i][j] = matrix[i][j] + std::cmp::max(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    dp[m - 1][m - 1]
}
