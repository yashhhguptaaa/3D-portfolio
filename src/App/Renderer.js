import * as THREE from "three";
import App from "./App";

export default class Renderer {
  constructor() {
    this.app = new App();
    this.camera = this.app.camera;
    this.scene = this.app.scene;
    this.canvas = this.app.canvas;
    this.setInstance();
  }

  setInstance() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    this.instance.setSize(this.innerWidth, this.innerHeight);
    this.instance.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  loop() {
    this.instance.render(this.scene, this.camera.instance);
  }
}
