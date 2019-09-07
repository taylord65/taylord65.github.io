import React from 'react';
import * as THREE from 'three';
import { EffectComposer, EffectPass, RenderPass, GlitchEffect, BlurPass } from "postprocessing";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

class ThreeScene extends React.Component {

  constructor(props) {
    super(props)

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
  }

  componentDidMount() {
    this.sceneSetup();
  }

  sceneSetup() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, width / height, 1, this.cubeSize*3 );

    camera.position.z = 5061;
    camera.position.y = -1144;

    let light = new THREE.SpotLight( 0xffffff, 0.3 );
    light.position.set(0, 5000, 0 );
    scene.add( light );

    scene.add( new THREE.AmbientLight( 0xc5c5c5 ) );
    

    const glitch = new GlitchEffect({ delay: new THREE.Vector2( 0, 0 ) });
    const effectPass = new EffectPass(camera, glitch);
    effectPass.renderToScreen = true;

    //Blur
    const blurPass = new BlurPass();
    blurPass.scale = 100;
    blurPass.enabled = true;
    blurPass.opacity = 1;
    blurPass.renderToScreen = true;
    blurPass.setResolutionScale(0.46);

    const clock = new THREE.Clock();

    const renderer = new THREE.WebGLRenderer({ antialias: true});
    renderer.setSize(width, height);
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    const controls = new OrbitControls( camera, renderer.domElement );
    controls.enabled = true;
    controls.enableZoom = true;
    controls.enablePan = false;
    controls.enableDamping = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 10;

    //Composer
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    //Add Passes
    //composer.addPass(effectPass);
    composer.addPass(blurPass);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x136c9e });
    const cube = new THREE.Mesh(geometry, material);

    camera.position.z = 4;
    scene.add(cube);
    scene.background = new THREE.Color( 0xFFFFFF );

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.material = material;
    this.cube = cube;
    this.composer = composer;
    this.clock = clock;
    this.controls = controls;

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
    //this.controls.update();
    if(this.props.blurOn) {
      this.composer.render(this.clock.getDelta());
    };
  }

  render() {
    return (<div id="three" className={`${this.props.blurOn ? 'blur' : '' }`} ref={(mount) => { this.mount = mount }} />)
  }
}

export default ThreeScene;