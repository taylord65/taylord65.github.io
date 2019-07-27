import React from 'react';
import * as THREE from 'three';
import * as POSTPROCESSING from 'postprocessing';
import * as ORBIT from 'three-orbitcontrols';

class ThreeScene extends React.Component {

    constructor(props) {
        super(props)

        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.animate = this.animate.bind(this)
    }

    componentDidMount() {
        const width = window.innerWidth
        const height = window.innerHeight

        const scene = new THREE.Scene()

        const camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            1000
        )

        //CAMERA
        // camera.position.z = 5061;
        // camera.position.y = -1144;

        const renderer = new THREE.WebGLRenderer({ antialias: true })
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({ color: 0xff00ff })
        const cube = new THREE.Mesh(geometry, material)

        camera.position.z = 4
        scene.add(cube)
        renderer.setClearColor('#000000')
        renderer.setSize(width, height)

        this.scene = scene
        this.camera = camera
        this.renderer = renderer
        this.material = material
        this.cube = cube

        let composer = new POSTPROCESSING.EffectComposer( renderer );

        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));

        this.mount.appendChild(this.renderer.domElement)
        this.start()
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
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    }

    renderScene() {
      this.renderer.render(this.scene, this.camera)
    }

    render() {
        return (
          <div ref={(mount) => { this.mount = mount }} />
        )
    }
}

export default ThreeScene;