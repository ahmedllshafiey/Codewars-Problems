function sumFibs() {
  let sum = 0;
  let num = 1;
  let arr = [0,1];
  for (let i = 1; i < arguments[0]; i++) {
    num = arr[i - 1] + arr[i];
    arr.push(num);
    if(num%2==0){
      sum = num + sum
    }
  }

  return sum;
}