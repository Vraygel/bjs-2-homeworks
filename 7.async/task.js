class AlarmClock {
    constructor(timerId){
        this.timerId = null
        this.alarmCollection = []
    }

    addClock (time, callback, id){

        if (!id) throw new Error('Параметр id не передан');

		  if (this.alarmCollection.some(item => item.id === id)) {
			console.error(`Будильник с таким id ${id} уже взведён!`);
			return;
		  };

          let alarm = {}
            
          alarm.time = time
          alarm.callback = callback
          alarm.id = id
          if(this.alarmCollection.findIndex(item =>item.id == id)  == -1  ){
           // console.log(this.alarmCollection.findIndex(item =>item.id == id))
            this.alarmCollection.push(alarm)
            
            } 
    }

removeClock(id){
  this.alarmCollection.splice(this.alarmCollection.findIndex((item, i) => item.id == id), 1)
  console.log(this)
}


getCurrentFormattedTime(){
    let data = new Date()
    console.log(data.getHours() + ":" + data.getMinutes())
    return (data.getHours() + ":" + data.getMinutes())
  }

  start(){
    let checkzvonok = checkClock.bind(this)
    function checkClock(zvonok) {
        if (zvonok.time === this.getCurrentFormattedTime()){
            zvonok.callback()
        } 
    }
        if (!this.timerId){
            this.timerId = setInterval(() => this.alarmCollection.forEach(item => this.checkzvonok(item)), 1000)
        } 
      
    }
     
    stop(){
      if (this.timerId){
        
        clearInterval(this.timerId)
        this.timerId = null
        
      }
    }



    printAlarms() {
		this.alarmCollection.forEach(item => console.log("id: " + item.id + " time: " + item.time));
	}
    clearAlarms(){
        this.stop()
        this.alarmCollection.splice(0, 10000000)
      }



}


function testCase() {

const budilnik = new AlarmClock(1)

budilnik.addClock(budilnik.getCurrentFormattedTime(), () => console.log("Будильник 1"), 1)

let timeTemp = new Date
timeTemp.setSeconds(timeTemp.getSeconds() + 60)
budilnik.addClock(timeTemp, () => { console.log("Будильник 2"); clock.removeClock(2) }, 2)

timeTemp = timeTemp.setSeconds(timeTemp.getSeconds() + 120)
budilnik.addClock(timeTemp, () => { console.log("Будильник 3"); clock.stop(); clock.clearAlarms() }, 3)

budilnik.printAlarms();
budilnik.start();

}

testCase()