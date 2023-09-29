import { Component, RefObject, createRef } from 'preact';
import * as THREE from 'three';

export class Background extends Component {
  canvas: RefObject<HTMLCanvasElement>;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;

  constructor(props: any) {
    super(props);
    this.canvas = createRef();
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas.current! });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  componentDidMount = () => {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas.current! });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    window.onresize = () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // this.animate();
  }

  animate = () => {
    requestAnimationFrame(this.animate);

    // this.renderer.render();
  }

  render = () => {
    return <canvas id="bg" ref={this.canvas} />;
  }
}