const canvas = document.querySelector(".webgl");

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "cyan",
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const sizes = {
  width: 800,
  height: 700,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);


// Trying to understand the architecture of the library

class Test {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printInfo() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old`
    );
    return {
      test: "Bing chilling",
    };
  }
}

const person = new Test("Matthew", 24).printInfo();
const person2 = new Test("e", 1);
console.log(person);
console.log(person2);
