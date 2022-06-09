"use strict"
function solveEquation(a, b, c) {
  let arr;
    let d;
    let x = [];
    d = (b**2)-(4*a*c);
    if(d > 0){
      x[0] = (-b + Math.sqrt(d) )/(2*a);
      x[1] = (-b - Math.sqrt(d) )/(2*a);
    } else {
      if(d == 0){
        x[0] = -b/(2*a);
      } 
    }
  return x;
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let  percentTemp = percent;
  percent = +percent
  
  if(Number.isFinite(percent) == false ){
    console.log(`Параметр процентная ставка содержит неправильное значение ${percentTemp}`)
    
    return
  }
  
  let  contributionTemp = contribution;
  contribution = +contribution
    
  if(Number.isFinite(contribution) == false ){
    console.log(`Параметр "процентная ставка" содержит неправильное значение: ${contributionTemp}`)
    return
  }

  let  amountTemp = amount;
  amount = +amount
    
  if(Number.isFinite(amount) == false ){
    console.log(`Параметр "процентная ставка" содержит неправильное значение: ${amountTemp}`)
    return
  }

  let sum;
  let s = amount - contribution ; // Тело кредита
  let p = (percent / 100) / 12; //
  let n = Math.floor((date - new Date()) / (1000 * 60 * 60 * 24 * 30)); //количество месяцев
 
    sum = (s * (p + (p / (((1 + p)**n) - 1)))) * n

  console.log(+sum.toFixed(2))
  return +sum.toFixed(2)
  // код для задачи №2 писать здесь

  return totalAmount;
}
