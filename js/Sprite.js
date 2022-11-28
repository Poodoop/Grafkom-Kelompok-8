// standard global variables
var container, scene, camera, renderer, controls;
var clock = new THREE.Clock();

init();
animate();

// FUNCTIONS 		
function init() {
	// SCENE
	scene = new THREE.Scene();
	// CAMERA
	var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
	var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
	camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
	scene.add(camera);
	camera.position.set(0,150,400);
	camera.lookAt(scene.position);	
	// RENDERER
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
	container = document.getElementById( 'ThreeJS' );
	container.appendChild( renderer.domElement );
	// CONTROLS
	controls = new THREE.OrbitControls( camera, renderer.domElement );
	// LIGHT
	var light = new THREE.PointLight(0xffffff);
	light.position.set(0,250,0);
	scene.add(light);
	// FLOOR
	var floorTexture = new THREE.ImageUtils.loadTexture( 'images/checkerboard.jpg' );
	floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping; 
	floorTexture.repeat.set( 10, 10 );
	var floorMaterial = new THREE.MeshBasicMaterial( { map: floorTexture, side: THREE.DoubleSide } );
	var floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
	var floor = new THREE.Mesh(floorGeometry, floorMaterial);
	floor.position.y = -0.5;
	floor.rotation.x = Math.PI / 2;
	scene.add(floor);
	
	var orangTexture = new THREE.ImageUtils.loadTexture( 'images/orang.png' );
	
    	var orangMaterial = new THREE.SpriteMaterial( { map: orangTexture, useScreenCoordinates: false } );
	var sprite = new THREE.Sprite( orangMaterial );
	sprite.position.set( -200, 85, 0 );
	sprite.scale.set( 200, 250, 1 );
	scene.add( sprite );
	
	var orangMaterial = new THREE.SpriteMaterial( { map: orangTexture, useScreenCoordinates: false } );
	var sprite = new THREE.Sprite( orangMaterial );
	sprite.position.set( -0, 85, 0 );
	sprite.scale.set( 200, 250, 1 );
	scene.add( sprite );
	
	var orangMaterial = new THREE.SpriteMaterial( { map: orangTexture, useScreenCoordinates: false } );
	var sprite = new THREE.Sprite( orangMaterial );
	sprite.position.set( 200, 85, 0 );
	sprite.scale.set( 200, 250, 1 );
	scene.add( sprite );
}

function animate() {
    requestAnimationFrame( animate );
	render();		
	update();
}

function update() {
	controls.update();
}

function render() {
	renderer.render( scene, camera );
}
