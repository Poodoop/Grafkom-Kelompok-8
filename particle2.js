let scene, camera, renderer;
let rain, rainbuffer;
const raincount = 10000;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 1;

    const ambientLight = new THREE.AmbientLight(0xfafafa);
    scene.add(ambientLight);

    rainbuffer = new THREE.BufferGeometry();
    let posrain = new Float32Array(raincount * 3);
    for (let i=0; i<(raincount*3); i+=3) {
        posrain[i] = Math.random() * 400 - 200;
        posrain[i+1] = Math.random() * 100 - 50;
        posrain[i+2] = Math.random() * 300 - 150;
    }
    rainbuffer.setAttribute('position', new THREE.BufferAttribute(posrain, 3));
    let rainmaterial = new THREE.PointsMaterial( {
        size : 0.2,
        color : 0xfafafa,
        transparent : true
    });
    rain = new THREE.Points(rainbuffer, rainmaterial);
    scene.add(rain);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement); 
}

function animate() {
    requestAnimationFrame( animate );

    const positions = rain.geometry.attributes.position.array;
    for (let i=0; i<(raincount*3); i+=3){
        positions[i+1] -= 2.0 + Math.random() * 0.1;
        if(positions[i+1] < (-300 * Math.random())){
            positions[i+1] = 100;
        }
        rain.geometry.attributes.position.needsUpdate = true;
    }
    renderer.render(scene, camera);
}

init();
animate();

