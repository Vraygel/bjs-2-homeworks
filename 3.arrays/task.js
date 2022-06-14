function compareArrays(arr1, arr2) {
  let result;
  
  if(arr1.length == arr2.length){
    result = arr1.every(totalTemp)
 } else {result = false}
 
 function totalTemp(item, index){
  return item === arr2[index];
}

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  let filterTemp 

  filterTemp = arr.filter((elem) => filterTemp = (elem >  0) && (elem % 3 == 0));
  
  resultArr = filterTemp.map((item) => item * 10);
 
  return resultArr; // array
}
