import * as THREE from "three";

const canvas = document.querySelector(".webgl");

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "cyan",
});

const mesh = new THREE.Mesh(geometry, material);
mesh.position.z = -3;
console.log(mesh.position);
scene.add(mesh);

const sizes = {
  width: 800,
  height: 700,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
