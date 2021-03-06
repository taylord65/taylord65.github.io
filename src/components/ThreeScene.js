import React from 'react';
import * as THREE from 'three';

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js';

import TWEEN from "@tweenjs/tween.js";

import { animateCSS } from '../helpers/animateCSS'
import { setBackgroundToBlack } from '../helpers/setBackgroundToBlack'
import { cleanMaterial } from '../helpers/cleanMaterial'

const cubeSize = 10500;
const cubeHeight = 3900;
const floorPositionY = -3000;
const blockRotateSpeed = 0.004;
const glitchTime = 700;

class ThreeScene extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showWebGLNotice: false,
      colorThemeName: 'NEW',
      glitchEnabled: false
    };
  }

  componentDidMount() {
    if (window.WebGLRenderingContext) {
      this.sceneSetup();
      this.generateSceneObjects();
      //this.generateFloor();
      this.generateGrid();
      this.generateTitle();
      //this.generateSkybox();
      this.glitch(glitchTime);

      animateCSS('#three', ['fadeIn'], () => {
        setBackgroundToBlack();
      });
      
      this.startAnimationLoop();
      window.addEventListener("resize", this.updateDimensions);
    } else {
      const span = document.createElement("span");
      const message = "Unable to initialize WebGL. Your browser or machine may not support it.";
      const textContent = document.createTextNode(message);
      span.appendChild(textContent);

      this.mount.appendChild(span);
      this.setState({showWebGLNotice: true});
    }
  }

  componentWillUnmount() {
    if (!this.state.showWebGLNotice) {
      window.removeEventListener("resize", this.updateDimensions);
      window.cancelAnimationFrame(this.frameId);

      this.controls.dispose();

      this.scene.traverse(object => {
        if (!object.isMesh) return
        
        object.geometry.dispose()

        if (object.material.isMaterial) {
          cleanMaterial(object.material)
        } else {
          for (const material of object.material) cleanMaterial(material)
        }
      });

      for (let i = this.scene.children.length - 1; i >= 0; i--) {
        this.scene.remove(this.scene.children[i])
      }

      this.scene.dispose();
      this.scene = null;
    }
  }

  componentDidUpdate(prevProps){
    if (!this.state.showWebGLNotice) {
      if (this.props.blurOn !== prevProps.blurOn) {
        if (this.props.blurOn) {
          this.zoomCamera(1);
        } else {
          this.zoomCamera(-1);
        }
      }
    }
  }

  generateTitle = () => {
    const loader = new SVGLoader();

    // load a SVG resource
    loader.load(
      'name.svg',
      (data) => {
        let paths = data.paths;
        let group = new THREE.Group();

        for (let i = 0; i < paths.length; i++) {
          let path = paths[i];

          let material = new THREE.MeshBasicMaterial({
            color: path.color,
            side: THREE.DoubleSide,
            depthWrite: false
          });

          let shapes = path.toShapes(true);

          for (let j = 0; j < shapes.length; j++) {
            let shape = shapes[ j ];
            let geometry = new THREE.ShapeBufferGeometry( shape );
            geometry.applyMatrix(new THREE.Matrix4().makeScale ( 1, -1, 1 ));

            let mesh = new THREE.Mesh( geometry, material );
            group.add(mesh);
          }
        }
        const scaleAmount = 3;

        group.scale.set(scaleAmount, scaleAmount, scaleAmount);

        //Center the SVG
        let bbox = new THREE.Box3().setFromObject(group);
        const center = new THREE.Vector3();

        let width = bbox.getSize(center).x;
        let height = bbox.getSize(center).y;

        group.translateX(-width/2);
        group.translateY(height/2);

        this.scene.add(group);
      },
      function (xhr) {
        //console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      function (error) {
        //console.log('An error happened');
      }
    );
  };

  generateGrid = () => {
    let material = new THREE.LineBasicMaterial({
      color: 0x0c4677
    });

    let horizontalSquare = (y) => {
      for (let i=0; i< 4; i++) {
        let x1, x2, z1, z2;
        let geometry = new THREE.Geometry();

        switch(i) {
          case 0:
            x1 = (-1) * cubeSize/2;
            z1 = cubeSize/2;

            x2 = cubeSize/2;
            z2 = cubeSize/2;
            break;
          case 1:
            x1 = cubeSize/2;
            z1 = cubeSize/2;

            x2 = cubeSize/2;
            z2 = (-1) * cubeSize/2;
            break;
          case 2:
            x1 = cubeSize/2;
            z1 = (-1) * cubeSize/2;

            x2 = (-1) * cubeSize/2;
            z2 = (-1) * cubeSize/2;
            break;
          case 3:
            x1 = (-1) * cubeSize/2;
            z1 = (-1) * cubeSize/2;

            x2 = (-1) * cubeSize/2;
            z2 = cubeSize/2;
            break;
          default:
        }

        geometry.vertices.push(
          new THREE.Vector3(x1, y, z1),
          new THREE.Vector3(x2, y, z2)
        );

        let line = new THREE.Line( geometry, material );
        this.scene.add( line );
      } 
    };

    let upRights = () => {
      for (let i=0; i< 4; i++) {
        let x, z;
        let geometry = new THREE.Geometry();

        switch(i) {
          case 0:
            x = cubeSize/2;
            z = cubeSize/2;
            break;
          case 1:
            x = (-1) * cubeSize/2;
            z = cubeSize/2;
            break;
          case 2:
            x = (-1) * cubeSize/2;
            z = (-1) * cubeSize/2;
            break;
          case 3:
            x = cubeSize/2;
            z = (-1) * cubeSize/2;
            break;
          default:
        }

        geometry.vertices.push(
          new THREE.Vector3(x, cubeHeight, z),
          new THREE.Vector3(x, floorPositionY, z)
        );

        let line = new THREE.Line( geometry, material );
        this.scene.add( line );
      }
    }

    horizontalSquare(cubeHeight);
    horizontalSquare(floorPositionY);
    upRights();
  };

  getRandomColor = (customThemeName) => {
    let randomColor;
    let Theme = this.state.colorThemeName;

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
      },
      NEW: {
        colorName: 'NEW',
        colorSet: ['022B3A', '235789', '4C86A8', '235789', '4C86A8', 'a80707', '8cfc03']
      },
      CAMO: {
        colorName: 'CAMO',
        colorSet: ['BAAD80', '4B6329', '260500', '142513']
      }
    };

    if(customThemeName){
      randomColor = colorTheme[customThemeName].colorSet[Math.floor(Math.random()*colorTheme[customThemeName].colorSet.length)];
    } else {
      randomColor = colorTheme[Theme].colorSet[Math.floor(Math.random()*colorTheme[Theme].colorSet.length)];
    }

    return parseInt('0x' + randomColor);
  };

  generateSceneObjects = () => {
    this.group = new THREE.Group();

    let geometry = new THREE.BoxGeometry( 40, 30, 40 );
    let numObjects = 300;

    for ( let i = 0; i < numObjects; i ++ ) {
      let object = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial({
          color: this.getRandomColor()
        })
      );

      let spread = 5000;

      object.position.x = (Math.round(Math.random()) * 2 - 1) * Math.random() * spread;
      object.position.y = (Math.round(Math.random()) * 2 - 1) * Math.random() * spread;
      object.position.z = (Math.round(Math.random()) * 2 - 1) * Math.random() * spread;

      object.rotation.x = Math.random() * 2 * Math.PI;
      object.rotation.y = Math.random() * 2 * Math.PI;
      object.rotation.z = Math.random() * 2 * Math.PI;

      let masterScale = 0.95;

      object.scale.x = (10*Math.random() * 2 + 1)*masterScale;
      object.scale.y = (5*Math.random() * 2 + 1)*masterScale;
      object.scale.z = (4*Math.random() * 2 + 1)*masterScale;

      object.castShadow = true;
      object.receiveShadow = false;

      this.group.add( object );
    }

    this.group.scale.set(0.001,0.001,0.001);
    this.scaleBlocks();

    this.scene.add(this.group);
  };

  generateFloor = () => {
    let loader = new THREE.TextureLoader();
    let self = this;
    const url = 'darkness.png';

    loader.load(url, function ( texture ) {
      texture.wrapS = THREE.RepeatWrapping; 
      texture.wrapT = THREE.RepeatWrapping;

      texture.repeat.set( 25, 25 ); 

      let material = new THREE.MeshLambertMaterial({ map : texture });
      let geometry = new THREE.PlaneGeometry(cubeSize, cubeSize, 8, 8);
      let plane = new THREE.Mesh( geometry, material );

      plane.rotateX( - Math.PI / 2);
      plane.position.y = floorPositionY;
      self.scene.add( plane );
    });
  };

  generateSkybox = () => {
    let materialArray = [];
    let texture_ft = new THREE.TextureLoader().load( 'spaceTest.jpg');
    let texture_bk = new THREE.TextureLoader().load( 'spaceTest.jpg');
    let texture_up = new THREE.TextureLoader().load( 'spaceTest.jpg');
    let texture_dn = new THREE.TextureLoader().load( 'spaceTest.jpg');
    let texture_rt = new THREE.TextureLoader().load( 'spaceTest.jpg');
    let texture_lf = new THREE.TextureLoader().load( 'spaceTest.jpg');

    materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));

    for (let i = 0; i < 6; i++) {
      materialArray[i].side = THREE.BackSide;
    }

    const boxDistance = 30000;

    let skyboxGeo = new THREE.BoxGeometry( boxDistance, boxDistance, boxDistance);
    let skybox = new THREE.Mesh( skyboxGeo, materialArray );
    this.scene.add( skybox );  
  };

  sceneSetup = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(70, width / height, 1, cubeSize*3 );

    this.camera.position.z = 5061;
    this.camera.position.y = -1144;

    const light = new THREE.SpotLight( 0xffffff, 0.3 );
    const ambientLight = new THREE.AmbientLight( 0x313131 );
    light.position.set(0, 5000, 0 );

    this.scene.add(light);
    this.scene.add(ambientLight);
  
    this.renderer = new THREE.WebGLRenderer({ antialias: true});
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;

    this.controls = new OrbitControls( this.camera, this.renderer.domElement );
    this.controls.enabled = true;
    this.controls.enableZoom = true;
    this.controls.enablePan = false;
    this.controls.enableDamping = false;
    this.controls.maxDistance = 6000;

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    const glitchPass = new GlitchPass();
    this.composer.addPass(glitchPass);

    this.scene.background = new THREE.Color( 0x000000 );
    this.mount.appendChild(this.renderer.domElement);
  };

  startAnimationLoop = () => {
    this.rotateBlocks();

    if (this.state.glitchEnabled) {
      this.composer.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }

    TWEEN.update();
    this.frameId = window.requestAnimationFrame(this.startAnimationLoop);
  };

  zoomCamera = (direction) => {
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

    let tween = new TWEEN.Tween(this.camera.position).to(destinationPosition, 180).start();
    return tween;
  };

  rotateBlocks = () => {
    this.group.children.forEach((object) => {
      object.rotateX(blockRotateSpeed);
      //object.rotateY(blockRotateSpeed);
      //object.rotateZ(blockRotateSpeed);
    });
  };

  scaleBlocks = () => {
    //Scale the cluster out after a delay
    setTimeout(() => {
      let tween = new TWEEN.Tween(this.group.scale).to({x: 1, y: 1, z: 1}, 160).start();
      return tween;
    }, 500);
  };

  glitch = (time) => {
    this.setState({glitchEnabled: true});

    setTimeout(() => {
      this.setState({
        glitchEnabled: false
      });
    }, time);
  };

  updateDimensions = () => {
    this.renderer.setSize(window.innerWidth, window.innerHeight)

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  };

  render() {
    return (
      <div id="three" 
          className={`${this.state.showWebGLNotice ? 'webgl-notice' : ''}`} 
          ref={mount => (this.mount = mount)} 
      />
    )
  }
}

export default ThreeScene;