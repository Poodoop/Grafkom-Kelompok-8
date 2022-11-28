
window.addEventListener('load', init)
let scene
let camera
let renderer
let mesh

function init() {
  scene = new THREE.Scene()
  
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 35
  
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  
  scene.add(new THREE.AmbientLight(0x404040)) 
  
  let geometry = new THREE.TorusGeometry(10, 3, 16, 100)
  let material = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 0.25 })
  mesh = new THREE.Points(geometry, material)
  
  scene.add(mesh)
  
  document.body.appendChild(renderer.domElement)
  animationLoop()
}

function animationLoop() {
  renderer.render(scene, camera)
  mesh.rotation.x += 0.005
  mesh.rotation.y += 0.005
  
  requestAnimationFrame(animationLoop)
}
