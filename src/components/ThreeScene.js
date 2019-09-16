import React from 'react';
import * as THREE from 'three';
import { EffectComposer, EffectPass, RenderPass, GlitchEffect, BlurPass } from "postprocessing";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import TWEEN from "@tweenjs/tween.js";

class ThreeScene extends React.Component {

  constructor(props) {
    super(props)

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
    this.cubeSize = 10500;
    this.cubeHeight = 3900;
    this.floorPositionY = -3000;
    this.glitchEnabled = false;
  }

  componentDidMount() {
    this.sceneSetup();
    this.generateSceneObjects();
    this.generateFloor();
    this.generateGrid();

    this.glitch(400);
  }

  // generateSceneElements(){
  //   var geo = new THREE.BoxBufferGeometry( cubeSize/2, 200, cubeSize );
  //   var materials = [];

  //   for(var i=0; i<6; i++){
  //     var mat;
  //     if(i == 2){
  //         mat = new THREE.MeshLambertMaterial( {color: 0x2196f3, opacity: 0.2, transparent: true} );
  //     } else {
  //         mat = new THREE.MeshLambertMaterial( {color: 0x2196f3, opacity: 0.3, transparent: true} );
  //     }
  //     materials.push(mat);
  //   }

  //   var cube = new THREE.Mesh(geo, materials);

  //   cube.position.y = floorPositionY + 200;
  //   cube.position.x = cubeSize/4;
  //   cube.name = "water";

  //   scene.add( cube );


  //   var sandmaterials = [];

  //   for(var i=0; i<6; i++){
  //     var mat;
  //     if(i == 2){

  //       var texture = new THREE.TextureLoader().load('https://d1mly9lp7y5o9.cloudfront.net/59c3781d5ee0cafa55cd1064649b6951?filename=Grass.jpg');

  //       texture.wrapS = THREE.RepeatWrapping;
  //       texture.wrapT = THREE.RepeatWrapping;
  //       texture.anisotropy = 16;

  //       texture.minFilter = THREE.NearestMipMapLinearFilter;
  //       texture.repeat.set( 10, 10 );

  //       mat = new THREE.MeshPhongMaterial({map: texture});  

  //     } else {
  //       mat = new THREE.MeshLambertMaterial( {color: 0x2196f3, opacity: 0.3, transparent: true} );
  //     }
  //     sandmaterials.push(mat);
  //   }

  //   var sand = new THREE.Mesh(geo, sandmaterials);

  //   sand.position.y = floorPositionY + 200;
  //   sand.position.x = -cubeSize/4;
  //   scene.add(sand);
  // }

  generateGrid(){
    let material = new THREE.LineBasicMaterial({
      color: 0xc9c9c9
    });

    //Uprights
    for (let i=0; i< 4; i++) {
      let x, z;
      let geometry = new THREE.Geometry();

      switch(i) {
        case 0:
          x = this.cubeSize/2;
          z = this.cubeSize/2;
          break;
        case 1:
          x = (-1) * this.cubeSize/2;
          z = this.cubeSize/2;
          break;
        case 2:
          x = (-1) * this.cubeSize/2;
          z = (-1) * this.cubeSize/2;
          break;
        case 3:
          x = this.cubeSize/2;
          z = (-1) * this.cubeSize/2;
          break;
        default:
      }

      geometry.vertices.push(
        new THREE.Vector3(x, this.cubeHeight, z),
        new THREE.Vector3(x, this.floorPositionY, z)
      );

      let line = new THREE.Line( geometry, material );
      this.scene.add( line );
    }

    for (let i=0; i< 4; i++) {
      let x1, x2, z1, z2;
      let geometry = new THREE.Geometry();

      switch(i) {
        case 0:
          x1 = (-1) * this.cubeSize/2;
          z1 = this.cubeSize/2;

          x2 = this.cubeSize/2;
          z2 = this.cubeSize/2;
          break;
        case 1:
          x1 = this.cubeSize/2;
          z1 = this.cubeSize/2;

          x2 = this.cubeSize/2;
          z2 = (-1) * this.cubeSize/2;
          break;
        case 2:
          x1 = this.cubeSize/2;
          z1 = (-1) * this.cubeSize/2;

          x2 = (-1) * this.cubeSize/2;
          z2 = (-1) * this.cubeSize/2;
          break;
        case 3:
          x1 = (-1) * this.cubeSize/2;
          z1 = (-1) * this.cubeSize/2;

          x2 = (-1) * this.cubeSize/2;
          z2 = this.cubeSize/2;
          break;
        default:
      }

      geometry.vertices.push(
        new THREE.Vector3(x1, this.cubeHeight, z1),
        new THREE.Vector3(x2, this.cubeHeight, z2)
      );

      let line = new THREE.Line( geometry, material );
      this.scene.add( line );
    }
  }

  getRandomColor(customThemeName){
    let randomColor;
    let Theme = 'WHITE';

    let colorTheme = {
      BLACK: {
        colorName: 'BLACK',
        colorSet: ['1BE7FF', '6EEB83', 'E4FF1A', 'E8AA14', 'FF5714',
                    'F46036', '2E294E', '1B998B', 'E71D36', 'C5D86D'] 
      },
      WHITE: {
        colorName: 'WHITE',
        colorSet: ['7B777D', 'A29F99', 'A3A09A', '85837E', '8892A1', '737075', '57A6CF']
        //colorSet: ['1BE7FF', '6EEB83', 'E4FF1A', 'E8AA14', 'FF5714', 'F46036', '2E294E', '1B998B', 'E71D36', 'C5D86D'] 
      },
      ALT: {
        colorName: 'COLORNAME',
        colorSet: ['363635', '62A87C', '617073', '4D685A', '545775', '202C39', '1F487E', '60B2E5', 'AEECEF']
      }
    };

    if(customThemeName){
      randomColor = colorTheme[customThemeName].colorSet[Math.floor(Math.random()*colorTheme[customThemeName].colorSet.length)];
    } else {
      randomColor = colorTheme[Theme].colorSet[Math.floor(Math.random()*colorTheme[Theme].colorSet.length)];
    }

    return parseInt('0x' + randomColor);
  }

  generateSceneObjects(){
    let group = new THREE.Object3D();
    let geometry = new THREE.BoxGeometry( 40, 30, 40 );
    let numObjects = 120;

    for ( let i = 0; i < numObjects; i ++ ) {
      let object = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial({
          color: this.getRandomColor()
        })
      );

      let spread = 1800;

      object.position.x = (Math.round(Math.random()) * 2 - 1) * Math.random() * spread;
      object.position.y = (Math.round(Math.random()) * 2 - 1) * Math.random() * spread;
      object.position.z = (Math.round(Math.random()) * 2 - 1) * Math.random() * spread;

      object.rotation.x = Math.random() * 2 * Math.PI;
      object.rotation.y = Math.random() * 2 * Math.PI;
      object.rotation.z = Math.random() * 2 * Math.PI;

      let masterScale = 1;

      object.scale.x = (10*Math.random() * 2 + 1)*masterScale;
      object.scale.y = (5*Math.random() * 2 + 1)*masterScale;
      object.scale.z = (4*Math.random() * 2 + 1)*masterScale;

      object.castShadow = true;
      object.receiveShadow = false;

      group.add( object );

      this.objects.push( object );
    }

    this.scene.add(group);
  }

  generateFloor(){
    let loader = new THREE.TextureLoader();
    let self = this;
    const url = 'https://i.imgur.com/OV4o87l.jpg';

    loader.load(url, function ( texture ) {
      texture.wrapS = THREE.RepeatWrapping; 
      texture.wrapT = THREE.RepeatWrapping;

      texture.repeat.set( 25, 25 ); 

      let material = new THREE.MeshLambertMaterial({ map : texture });
      let geometry = new THREE.PlaneGeometry(self.cubeSize, self.cubeSize, 8, 8);
      let plane = new THREE.Mesh( geometry, material );

      plane.rotateX( - Math.PI / 2);
      plane.position.y = self.floorPositionY;
      self.scene.add( plane );
    });
  }

  sceneSetup() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, width / height, 1, this.cubeSize*3 );

    camera.position.z = 5061;
    camera.position.y = -1144;

    let light = new THREE.SpotLight( 0xffffff, 0.3 );
    let ambientLight = new THREE.AmbientLight( 0xc5c5c5 );
    light.position.set(0, 5000, 0 );
    scene.add( light );
    scene.add( ambientLight );
    
    const glitch = new GlitchEffect({ delay: new THREE.Vector2( 0, 0 ) });
    const glitchEffect = new EffectPass(camera, glitch);
    glitchEffect.renderToScreen = true;

    //Blur
    const blurPass = new BlurPass();
    blurPass.scale = 500;
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
    controls.maxDistance = 6000;

    //Composer
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(blurPass);

    const composer2 = new EffectComposer(renderer);
    composer2.addPass(new RenderPass(scene, camera));
    composer2.addPass(glitchEffect);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x136c9e });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    scene.background = new THREE.Color( 0xFFFFFF );

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.material = material;
    this.cube = cube;
    this.composer = composer;
    this.composer2 = composer2;
    this.clock = clock;
    this.controls = controls;
    this.objects = [];

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

  glitch(time) {
    this.glitchEnabled = true;

    let self = this;
    setTimeout(function(){
      self.glitchEnabled = false;
    }, time);
  }

  zoomCamera(direction) {
    const center = new THREE.Vector3(0,0,0);
    const zoomAmount = 400;
    let newLength;

    let cameraPositionClone = new THREE.Vector3(this.camera.position.x , this.camera.position.y, this.camera.position.z);
    let distanceFromCenterToCamera = center.distanceTo(cameraPositionClone);

    if (direction > 0) {
      newLength = distanceFromCenterToCamera + zoomAmount;
    } else {
      newLength = distanceFromCenterToCamera - zoomAmount;
    }
    
    let destinationPosition = cameraPositionClone.sub(center).setLength(newLength).add(center);

    let tween = new TWEEN.Tween(this.camera.position).to(destinationPosition, 120).start();
    return tween;
  }

  animate() {
    //single small cube is working
    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01

    this.renderScene()

    TWEEN.update();

    this.frameId = window.requestAnimationFrame(this.animate)
  }

  componentDidUpdate(prevProps){
    if (this.props.blurOn !== prevProps.blurOn) {
      if (this.props.blurOn) {
        this.zoomCamera(1);
      } else {
        this.zoomCamera(-1);
      }
    }
  }

  updateDimensions() {
    //this.composer.setSize(window.innerWidth, window.innerHeight);
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  renderScene() {
    this.controls.update();

    if (this.glitchEnabled) {
      this.composer2.render(this.clock.getDelta());
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }

  render() {
    return (
      <div id="three" className={`${this.props.blurOn ? 'blur' : '' }`} ref={(mount) => { this.mount = mount }} />
    )
  }
}

export default ThreeScene;