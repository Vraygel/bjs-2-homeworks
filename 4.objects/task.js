function Student(name, gender, age) {
    // Ваш код
    this.name = name;
    this. gender = gender;
    this. age = age;

}


Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}


Student.prototype.addMark = function (mark) {
  //ваш код

  if(this.marks === undefined){ 
    // добавить первую оценку 
    this.marks =[];
    this.marks.push(mark); 
    } else {
      this.marks.push(mark)
    }
}

Student.prototype.addMarks = function (...mark) {
  if(this.marks === undefined){ 
      this.marks =[];
    for (let i of mark){
      this.marks.push(i) 
    }
      
  }
}



Student.prototype.getAverage = function () {
  let x = 0

  for(let y of this.marks){
    x = x + (y)
  }
  
  return x / this.marks.length
    
  }
 



Student.prototype.exclude = function (reason) {
  
    delete this.subject
    delete this.marks
    this.excluded = reason
 
}