export class Stopwatch {
  initTime = 0;
  isActive = false;
  intervalId = null;
  time = 0;
  onTick;

  constructor(onTick) {
    this.onTick = onTick;
  }

  start() {
    if (this.isActive) return;
    this.isActive = true;
    this.initTime = Date.now();

    this.intervalId = setInterval(() => {
      const time = Date.now() - this.initTime;
      const objTime = this.getTimeComponents(time);
      this.onTick(objTime);
    }, 1000);
  }

  stop() {
    if (!this.isActive) return;
    this.isActive = false;

    clearInterval(this.intervalId);
  }

  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}
