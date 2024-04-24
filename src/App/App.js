import Camera from "./Camera";
import Renderer from "./Renderer";
import * as THREE from "three";
import Loop from "./Utils/Loop";
import World from "./World/World";

let instance = null;
export default class App {
  constructor() {
    if (instance) return instance;
    instance = this;

    this.canvas = document.querySelector("canvas.threejs");
    this.scene = new THREE.Scene();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.loop = new Loop();
    this.world = new World();
  }
}
