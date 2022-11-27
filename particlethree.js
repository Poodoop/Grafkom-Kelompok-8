var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(45,innerWidth/innerHeight, 1, 1000);
var renderer = new THREE.WebGLRenderer({ antialias: true });

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

/*
let pGeo = new THREE.SphereGeometry(3,30,30);
let pMat = new THREE.PointsMaterial({
    size : 0.2,
    color : 0xff0000
})
let partikel = new THREE.Points(pGeo, pMat);
scene.add(partikel);
*/

let controls = new THREE.OrbitControls(cam, renderer.domElement);

function drawScene(){
    renderer.render(scene, cam);
    requestAnimationFrame(drawScene);
}

drawScene();

