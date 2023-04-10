import * as THREE from "three";

const canvas = document.querySelector(".webgl");
const scene = new THREE.Scene();

const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 2, 1),
  new THREE.MeshBasicMaterial({ color: "cyan" })
);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "green" })
);

cube2.position.x = -1;

group.add(cube1);
group.add(cube2);

const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

const sizes = {
  width: 800,
  height: 700,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(1, 1, 3);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
