class PrintEditionItem {
    constructor (name, releaseDate, pagesCount){
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;

}

fix(){
    this.state = this.state * 1.5;
}

set state(num){
    if(num < 0){
        this._state = 0
    } 
    if(num > 100) {
        this._state = 100
    }
    
    else {
        this._state = num
    }
}

get state(){
    return this._state
}

}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount)
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount)
        this.type = "book";
        this.author = author
    }
    

}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount)
        this.type = "novel";
        
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount)
        this.type = "fantastic";
        
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount)
        this.type = "detective";
        
    }
}

class Library extends PrintEditionItem{
    constructor (name, state){
        super(state)
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if(this.state > 30){
            this.books.push(book)
        } 
        
    }

    findBookBy(argument, value){
         
        for(let item in this.books){
           
            for(let elem in this.books[item]){
                if(elem == argument && (this.books[item][elem]) == value){
                    return this.books[item]
                } 
                
            }
            
        }

        return null
        
    }
            
    giveBookByName(bookName){
        
        for(let item in this.books){
                     
            for(let elem in this.books[item]){
                if(this.books[item].name == bookName){
                    let temp =   this.books[item]  
                    this.books.splice(item, 1)           
                    return temp
                } 
                
            }
            
        }

        return null
    }
}





class Student{
    constructor(nameFirst, nameLast){
      this.nameFirst = nameFirst;
      this.predmets = {}
    }

  addMark(ball, predmet){
    if(ball > 5 || ball < 1){
    console.log("Ошибка, оценка должна быть числом от 1 до 5")
    } else {
    if (predmet in this.predmets){
      this.predmets[predmet].push(ball)  
    } else{
    this.predmets[predmet] = [ball]
      }
    
  }
 }

  getAverageBySubject(predmet){
    if(predmet in this.predmets){
      
        let arr = (this.predmets[predmet])
           let rezult = arr.reduce((sum, ball) => sum + ball) / arr.length
          console.log(+ rezult.toFixed(2))
          return + rezult.toFixed(2)
          
        } else(console.log("Несуществующий предмет"))
    
  }

  getAverage(){
    let arr = []
    let rezult = []
    for(let item in this.predmets){
      arr = arr.concat(Object.values(this.predmets[item]))
     rezult = arr.reduce((sum, ball) => sum + ball) / arr.length
      console.log(+ rezult.toFixed(2))    
    }
  return + rezult.toFixed(2)

  }
  
 exclude(text){
   console.log("Исключен за попытку подделать оценки")
 }
  
}


const student = new Student("Олег Никифоров");

student.addMark(4, "geometry");
student.addMark(5, "geometry");
student.addMark(5, "geometry");
student.addMark(5, "geometry");
student.addMark(4, "algebra");
student.addMark(3, "algebra");
student.addMark(2, "algebra");
student.addMark(5, "algebra");
student.addMark(4, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(3, "geometry");
student.addMark(3, "geometry");


student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("algebra"); // Средний балл по предмету geometry 4.5

student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
student.exclude("Исключен за попытку подделать оценки");



console.log(student)