function highAndLow(numbers) {
    numbers = numbers.split(" ")
    let max = numbers[0];
    let min = numbers[0];
      
      for(let i = 0; i < numbers.length; i++) {
        if(+max < +numbers[i]){
          max = numbers[i]
        }else if(+min > numbers[i]) {
          min = numbers[i]
        }
      }
      
    return `${max} ${min}`
}