import React from 'react';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import TWEEN from "@tweenjs/tween.js";

import { animateCSS } from '../helpers/animateCSS'
import { setBackgroundToBlack } from '../helpers/setBackgroundToBlack'
import { cleanMaterial } from '../helpers/cleanMaterial'

const cubeSize = 10500;
const cubeHeight = 3900;
const floorPositionY = -3000;
const clusterRotateSpeed = 0.0002;
const blockRotateSpeed = 0.0008;

class ThreeScene extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showWebGLNotice: false,
      colorThemeName: 'BLACK'
    };
  }

  componentDidMount() {
    if (window.WebGLRenderingContext) {
      this.sceneSetup();
      this.generateSceneObjects();
      //this.generateFloor();
      //this.generateGrid();
      this.generateTitle();

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
      clearTimeout(this.turnOffGlitchTimeout);
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

        //Center the SVG
        let bbox = new THREE.Box3().setFromObject(group);
        let width = bbox.getSize().x;
        let height = bbox.getSize().y;

        group.translateX(-width/2);
        group.translateY(height/2);

        this.scene.add(group);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      function (error) {
        console.log('An error happened');
      }
    );
  };

  generateGrid = () => {
    let material = new THREE.LineBasicMaterial({
      color: 0x0c4677
    });

    //Uprights
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
        new THREE.Vector3(x1, cubeHeight, z1),
        new THREE.Vector3(x2, cubeHeight, z2)
      );

      let line = new THREE.Line( geometry, material );
      this.scene.add( line );
    }
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
    let numObjects = 120;

    for ( let i = 0; i < numObjects; i ++ ) {
      let object = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial({
          color: this.getRandomColor()
        })
      );

      let spread = 2500;

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
    const url = 'https://i.imgur.com/OV4o87l.jpg';

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

    let blackCubeWidth = 1;

    const geometry = new THREE.BoxGeometry(blackCubeWidth, blackCubeWidth, blackCubeWidth);
    const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.scene.background = new THREE.Color( 0x000000 );
    this.mount.appendChild(this.renderer.domElement);
  };

  startAnimationLoop = () => {
    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01

    this.rotateBlocks();
    this.renderer.render(this.scene, this.camera);

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
      object.rotateY(blockRotateSpeed);
      object.rotateZ(blockRotateSpeed);
    });

    this.scene.children[3].rotateY(clusterRotateSpeed);
    this.scene.children[3].rotateX(clusterRotateSpeed);
    this.scene.children[3].rotateZ(-1 * clusterRotateSpeed);
  };

  scaleBlocks = () => {
    //Scale the cluster out after a delay
    setTimeout(() => {
      let tween = new TWEEN.Tween(this.group.scale).to({x: 1, y: 1, z: 1}, 100).start();
      return tween;
    }, 500);
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