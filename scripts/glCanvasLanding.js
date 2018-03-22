(function (){

const container = document.getElementById("glCanvasLanding");

resizeCanvas();
var resizeCanvasDebounced = debounce(resizeCanvas, 10);
window.addEventListener('resize', resizeCanvasDebounced, false);

var width = window.innerWidth;
var height = window.innerHeight;
var aspect = width / height;
var strobePower = 10.0;

const VIEW_ANGLE = 45;
const NEAR = 0.1;
const FAR = 10000;

const renderer = new THREE.WebGLRenderer();
var camera = new THREE.PerspectiveCamera(VIEW_ANGLE, aspect, NEAR, FAR);
const scene = new THREE.Scene();

scene.add(camera);
renderer.setSize(width, height);
container.appendChild(renderer.domElement);

const RADIUS = 50;
const SEGMENTS = 32;
const RINGS = 32;

const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0xCC0000 });
const sphere = new THREE.Mesh(new THREE.SphereGeometry(RADIUS, SEGMENTS, RINGS), sphereMaterial);

sphere.position.z = -300;
scene.add(sphere);

const pointLight = new THREE.PointLight(0xAAFFFF);

pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130
pointLight.power = strobePower;

scene.add(pointLight);
requestAnimationFrame(update);

function update()
{
	container.width = window.innerWidth;
	container.height = window.innerHeight;

	width = window.innerWidth;
	height = window.innerHeight;

	if (aspect != (width / height))
	{
		aspect = width / height;
		camera = new THREE.PerspectiveCamera(VIEW_ANGLE, aspect, NEAR, FAR);
	}

	strobePower += 0.10;
	pointLight.power = 20.0 * Math.sin(strobePower);

	renderer.setSize(width, height);
  renderer.render(scene, camera);

	sphere.geometry.verticesNeedUpdate = true;
	sphere.geometry.normalsNeedUpdate = true;

  requestAnimationFrame(update);
}

function resizeCanvas()
{

}

})();
