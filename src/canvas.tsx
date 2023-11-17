import { Component, RefObject, createRef } from 'preact';
import './css/canvas.scss';

class Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  ax: number;
  ay: number;
  r: number;

  // I wish there were list initializers in JS/TS...
  constructor(x: number, y: number, dx: number, dy: number, r: number) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.ax = 0;
    this.ay = 0;
  }

  draw = (ctx: CanvasRenderingContext2D, mouse: { x: number, y: number }) => {
    const dist = ((this.x - mouse.x) ** 2 + (this.y - mouse.y) ** 2) ** 0.5;
    if (dist > 100) {
      this.ax = 0.05 - Math.random() * 0.1;
      this.ay = 0.05 - Math.random() * 0.1;
    } else {
      this.ax = 0.01 * Math.sign(this.x - mouse.x);
      this.ay = 0.01 * Math.sign(this.y - mouse.y);
    }
    this.dx += this.ax;
    this.dy += this.ay;
    this.y += this.dy;
    this.x += this.dx;

    if (this.x < 0) this.x = ctx.canvas.width;
    else if (this.x > ctx.canvas.width) this.x = 0;
    if (this.y < 0) this.y = ctx.canvas.height;
    else if (this.y > ctx.canvas.height) this.y = 0;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    if (dist > 100) ctx.fillStyle = `rgba(0, 255, 136, 1)`;
    else ctx.fillStyle = `rgba(0, 136, 255, 1)`;
    ctx.fill();

    this.dx *= 0.99;
    this.dy *= 0.99;
  }
}

export class Canvas extends Component {
  canvas: RefObject<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  mouse: { x: number, y: number };
  particles: Particle[];

  constructor(props: any) {
    super(props);
    this.canvas = createRef();
    this.mouse = { x: 0, y: 0 };
    this.particles = [];
    for (let i = 0; i < 42; i++)
      this.particles.push(
        new Particle(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight,
          0.5 - Math.random(),
          0.5 - Math.random(),
          1 + Math.random()));
  }

  componentDidMount = () => {
    this.ctx = this.canvas.current!.getContext('2d')!;
    window.addEventListener('mousemove', (e: { x: number, y: number }) => {
      this.mouse.x = e.x;
      this.mouse.y = e.y;
    });
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
    window.addEventListener('resize', () => {
      this.ctx.canvas.width = window.innerWidth;
      this.ctx.canvas.height = window.innerHeight;
    })

    this.ctx.lineWidth = 2;

    this.animate();
  }

  animate = () => {
    requestAnimationFrame(this.animate);

    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    for (let i = 0; i < this.particles.length; i++) {
      let p1 = this.particles[i];
      for (let j = i; j < this.particles.length; j++) {
        let p2 = this.particles[j];
        let grad = ((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2) / (this.ctx.canvas.width ** 2 + this.ctx.canvas.height ** 2);
        if (grad > 0.01) continue;
        this.ctx.beginPath();
        this.ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 + grad / 2})`;
        this.ctx.moveTo(p1.x, p1.y);
        this.ctx.lineTo(p2.x, p2.y)
        this.ctx.stroke();
      }
      p1.draw(this.ctx, this.mouse);
    }
  }

  render = () => {
    return <canvas id="bg" ref={this.canvas} />;
  }
}