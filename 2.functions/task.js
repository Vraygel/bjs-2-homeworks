// Задание 1
function getArrayParams(arr) {
  let min = Infinity, max = -Infinity, sum = 0, avg = 0;

for (let i=0; i < arr.length; i++){

  sum = sum + arr[i]

  if(arr[i] < min){
    min = arr[i]
  }

  if(arr[i] > max){
    max = arr[i]
  }
}

avg = sum / arr.length
avg = +avg.toFixed(2)

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for(y = 0; y < arr.length; y++){
  sum = sum + arr[y]
  // Ваш код
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for(let item of arrOfArr){
      if(func(item) > max){
        max = func(item)
      }
  }
   return max
}

// Задание 3
function worker2(arr) {
 
  return (getArrayParams(arr)).max - (getArrayParams(arr)).min

}