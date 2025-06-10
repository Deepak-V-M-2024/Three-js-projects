import * as THREE from 'three';
import { OrbitControls } from 'fsm/three/addons/controls/OrbitControls.js';

const W=window.innerWidth;
const H=window.innerHeight;
const renderer=new THREE.WebGLRenderer({antialias:true});
renderer.setSize(W,H);
document.body.appendChild(renderer.domElement);
const fov=75;
const aspect=W/H; 
const near=0.1;
const far=10;

const camera=new THREE.PerspectiveCamera(fov,aspect,near,far);
camera.position.z=2;
const scene=new THREE.Scene();
//const controls=new OrbitControls(camera,renderer.domElement);
const geo=new THREE.IcosahedronGeometry(1.0,2);
const mat=new THREE.MeshStandardMaterial({
    color:0xffffff,
    flatShading:true,
    //wireframe:true
    });
    const mesh=new THREE.Mesh(geo,mat);
    scene.add(mesh);
    const Wirematerial=new THREE.MeshBasicMaterial({
        color:0xffffff,
        wireframe:true
    });
    const wireMesh=new THREE.Mesh(geo,Wirematerial);
    mesh.add(wireMesh);
    wireMesh.scale.setScalar(1.01,1.01,1.01);
    scene.add(wireMesh);
    const hemiLight=new THREE.HemisphereLight(0x0099ff,0xaa5500,1);
    scene.add(hemiLight);   

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
    //mesh.scale.setScalar(1.01,1.01,1.01);
    mesh.rotation.x+=0.01;
    mesh.rotation.y+=0.01;
}   
animate();

