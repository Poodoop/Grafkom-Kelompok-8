var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(45,innerWidth/innerHeight, 1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(innerWidth, innerHeight);
cam.position.z = 10;
cam.position.y = 5;

document.body.appendChild(renderer.domElement);

var directionalLight = new THREE.DirectionalLight({ color: 0xFFFFFF, intensity: 100});
directionalLight.position.set(0, 1, 0);
directionalLight.castShadow = true;
scene.add(directionalLight);


var ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

let cubeMesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshPhongMaterial({ color: 0xff0000 })
);
scene.add(cubeMesh);

let gr = new THREE.GridHelper(100, 20, 0xfafafa, 0xfafafa);
gr.position.set(0, -0.5, 0);
scene.add(gr);


let pgeosp = new THREE.SphereGeometry(3, 40, 40);
let pgeorg = new THREE.RingGeometry(5,10,100,10,10,10);

let ftxt = new THREE.TextureLoader().load('flare.png');

let pmat = new THREE.PointsMaterial({
    size : 0.2,
    map : ftxt,
    transparent : true
    //color : 0xff0000
});
let partikelsp = new THREE.Points(pgeosp, pmat);
let partikelrg = new THREE.Points(pgeorg, pmat);
scene.add(partikelsp);
scene.add(partikelrg);

let controls = new THREE.OrbitControls(cam, renderer.domElement);

function drawScene(){
    renderer.render(scene, cam);
    
    partikelsp.rotation.y += 0.01;
    partikelsp.rotation.x += 0.01;
    
    partikelrg.rotation.z += 0.01;
    partikelrg.rotation.x += 0.01;
    
    requestAnimationFrame(drawScene);
}

drawScene();