import './style.css'
import * as THREE from 'three'
import { addBoilerPlateMesh, addStandardMesh } from './addmeshes'
import { addLight } from './addlights'


const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({ antialias: true })
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	100
)
camera.position.set(0,0,5)
const meshes = {}

init()
function init() {
	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)

	meshes.default = addBoilerPlateMesh()
	meshes.standard = addStandardMesh()
	meshes.defaultLight = addLight()

	scene.add(meshes.default)
	scene.add(meshes.standard)
	scene.add(meshes.defaultLight)

	resize()
	animate()
}

function resize() {
	window.addEventListener('resize', ()=>{ //computer listening to the event of our window size changing
		renderer.setSize(window.innerWidth, window.innerHeight)
		camera.aspect = window.innerWidth/window.innerHeight //adjusting camera aspect ratio
		camera.updateProjectionMatrix()
	})
}

function animate() {
	requestAnimationFrame(animate)
	meshes.default.rotation.x += 0.01
	meshes.default.rotation.z += 0.01

	meshes.standard.rotation.x += 0.01
	meshes.standard.rotation.z += 0.01
	renderer.render(scene, camera)
}
