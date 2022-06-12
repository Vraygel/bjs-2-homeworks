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
  
  
    for (i=0; i < arrOfArr.length; i++){
       
      if(worker(arrOfArr[i]) > max){
        max = worker(arrOfArr[i])
      }
      } 
    
      
  return max;
}















// Задание 3
function worker2(arr) {
  console.log(Math.abs(maxMin(arr1).max - maxMin(arr1).min))
  }
    
    function maxMin(arr1) {
      let min = Infinity, max = -Infinity, sum = 0, avg = 0;
    
    for (let i=0; i < arr1.length; i++){
      
      sum = sum + arr1[i]
    
      if(arr1[i] < min){
        min = arr1[i]
      }
    
      if(arr1[i] > max){
        max = arr1[i]
      }
    }
    
    
      return { min: min, max: max};
    }
    
    let total = 20; //количество элементов в массиве
    let arr1 = [] 
    
    for (i=1; i < total; i++){
      
    getRandomInt(-100, 100)
    
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let x = Math.floor(Math.random() * (max - min)) + min  
        arr1.push(x)
        return arr1;    
      } 
      
    }
    console.log(arr1)
    worker2(arr1)
    
    
  
  



