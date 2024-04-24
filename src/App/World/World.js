import App from "../App";
import * as THREE from "three";

export default class World {
  constructor() {
    this.app = new App();
    this.scene = this.app.scene;

    const cubeMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );
    this.scene.add(cubeMesh);
  }
}
