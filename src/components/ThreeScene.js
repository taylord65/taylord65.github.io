import React from 'react';
import * as THREE from 'three';
import { EffectComposer, EffectPass, RenderPass, GlitchEffect, NoiseEffect } from "postprocessing";
import * as ORBIT from 'three-orbitcontrols';

class ThreeScene extends React.Component {

  constructor(props) {
    super(props)

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
  }

  componentDidMount() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000 );
    const glitch = new GlitchEffect(64);
    const effectPass = new EffectPass(camera, glitch);
    effectPass.renderToScreen = true;


    const clock = new THREE.Clock();


    const renderer = new THREE.WebGLRenderer({ antialias: true});
    renderer.setSize(width, height);
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;


    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(effectPass);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff00ff });
    const cube = new THREE.Mesh(geometry, material);

    camera.position.z = 10;
    scene.add(cube);
    scene.background = new THREE.Color( 0xFFFFFF );


    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.material = material;
    this.cube = cube;
    this.composer = composer;
    this.clock = clock;

    window.addEventListener("resize", this.updateDimensions.bind(this));

    this.mount.appendChild(this.renderer.domElement);
    this.start();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId)
  }

  animate() {
    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01

    this.renderScene()

    this.frameId = window.requestAnimationFrame(this.animate)
  }

  updateDimensions() {
    //this.composer.setSize(window.innerWidth, window.innerHeight);
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
    this.composer.render(this.clock.getDelta());
  }

  render() {
    return (<div ref={(mount) => { this.mount = mount }} />)
  }
}

export default ThreeScene;