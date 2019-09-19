export class Timer {
  constructor(seconds) {
    this.length = seconds;
    this.count;
    this.finished = false;
    this.countdown();
  }

  countdown() {
    this.count = setInterval(() => {
      this.length--;
      if(this.length === 0) {
        this.finished = true;
        clearInterval(this.count);
      }
    }, 1000);
  }

  getTimeLeft() {
    return this.length;
  }


  stopTimer() {
    clearInterval(this.count);
  }
}
