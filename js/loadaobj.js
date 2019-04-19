var THREE = require('three');
var scene = new THREE.Scene();
var mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath('obj/');
mtlLoader.load('74.mtl', function(materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('obj/');
    objLoader.load('74.obj', function(object) {
        scene.add(object);
    });
});

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 3;

window.addEventListener('resize', function () {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

var axis = new THREE.AxesHelper(1000);
scene.add(axis);


controls = new THREE.OrbitControls(camera, renderer.domElement);

var ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.8);
scene.add(ambientLight);

var pointLight = new THREE.PointLight(0xFFFFFF, 0.6, 50);
scene.add(pointLight);

var update = function(){
    var time= Date.now() * 0.0005;
    pointLight.position.x = Math.sin(time * 0.7) * 30;
    pointLight.position.y = Math.cos(time * 0.5) * 40;
    pointLight.position.z = Math.cos(time * 0.3) * 30;
};

var gameLoop = function(){
    requestAnimationFrame(gameLoop);
    update();
    renderer.render(scene, camera);
};
console.log("start game loop");
gameLoop();