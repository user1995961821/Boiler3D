import * as THREE from 'three'

export function addLight(){
    const Light = new THREE.DirectionalLight(0xffffff, 1) //color, intensity
    Light.position.set(1,1,1)
    return Light
}