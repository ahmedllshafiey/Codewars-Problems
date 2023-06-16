prime_factors = function (n) {
  var res = [];
  for (var i = 2; i <= n; ++i) {
    for (; n % i == 0; n /= i) res.push(i);
  }
  return res;
};
