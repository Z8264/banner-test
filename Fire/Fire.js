// eslint-disable-next-line max-classes-per-file
// const onresize = function () { oCanvas.canvas.width = window.innerWidth; oCanvas.canvas.height = window.innerHeight; };
import Flame from './Flame';
import Spark from './Spark';

class Fire {
  constructor() {
    this.canvas = document.getElementById('fire');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;

    this.aFires = [];
    this.aSpark = [];
    this.aSpark2 = [];

    this.mouse = {
      x: this.canvas.width * 0.5,
      y: this.canvas.height * 0.75,
    };

    this.init();
  }

  init() {
    this.canvas.addEventListener('mousemove', this.updateMouse.bind(this), false);
  }

  run() {
    this.update();
    this.draw();

    if (this.bRuning) { requestAnimationFrame(this.run.bind(this)); }
  }

  start() {
    this.bRuning = true;
    this.run();
  }

  stop() {
    this.bRuning = false;
  }

  update() {
    this.aFires.push(new Flame(this.mouse));
    this.aSpark.push(new Spark(this.mouse));
    this.aSpark2.push(new Spark(this.mouse));

    for (let i = this.aFires.length - 1; i >= 0; i -= 1) {
      if (this.aFires[i].alive) { this.aFires[i].update(); } else { this.aFires.splice(i, 1); }
    }

    for (let i = this.aSpark.length - 1; i >= 0; i -= 1) {
      if (this.aSpark[i].alive) { this.aSpark[i].update(); } else { this.aSpark.splice(i, 1); }
    }

    for (let i = this.aSpark2.length - 1; i >= 0; i -= 1) {
      if (this.aSpark2[i].alive) { this.aSpark2[i].update(); } else { this.aSpark2.splice(i, 1); }
    }
  }

  draw() {
    this.ctx.globalCompositeOperation = 'source-over';
    this.ctx.fillStyle = 'rgba( 15, 5, 2, 1 )';
    this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    this.grd = this.ctx.createRadialGradient(this.mouse.x, this.mouse.y - 200, 200, this.mouse.x, this.mouse.y - 100, 0);
    this.grd.addColorStop(0, 'rgb( 15, 5, 2 )');
    this.grd.addColorStop(1, 'rgb( 30, 10, 2 )');
    this.ctx.beginPath();
    this.ctx.arc(this.mouse.x, this.mouse.y - 100, 200, 0, 2 * Math.PI);
    this.ctx.fillStyle = this.grd;
    this.ctx.fill();

    this.ctx.font = '15em Amatic SC';
    this.ctx.textAlign = 'center';
    this.ctx.strokeStyle = 'rgb(50, 20, 0)';
    this.ctx.fillStyle = 'rgb(120, 10, 0)';
    this.ctx.lineWidth = 2;
    this.ctx.strokeText('Fire', this.canvas.width / 2, this.canvas.height * 0.72);
    this.ctx.fillText('Fire', this.canvas.width / 2, this.canvas.height * 0.72);

    this.ctx.globalCompositeOperation = 'overlay';// or lighter or soft-light

    for (let i = this.aFires.length - 1; i >= 0; i -= 1) {
      this.aFires[i].draw(this.ctx);
    }

    this.ctx.globalCompositeOperation = 'soft-light';// "soft-light";//"color-dodge";

    for (let i = this.aSpark.length - 1; i >= 0; i -= 1) {
      if ((i % 2) === 0) { this.aSpark[i].draw(this.ctx); }
    }

    this.ctx.globalCompositeOperation = 'color-dodge';// "soft-light";//"color-dodge";

    for (let i = this.aSpark2.length - 1; i >= 0; i -= 1) {
      this.aSpark2[i].draw(this.ctx);
    }
  }

  updateMouse(e) {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;

    // this.aFires.push( new Flame( this.mouse ) );
  }
}

export default Fire;
