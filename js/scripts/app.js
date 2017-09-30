var container, stats;
var camera, controls, scene, renderer, composer, composer2;
var glitchPass;
var frame;
var Theme = 'WHITE';

var colorTheme = {
  BLACK: {
    colorName: 'BLACK',
    colorSet: ['1BE7FF', '6EEB83', 'E4FF1A', 'E8AA14', 'FF5714',
                'F46036', '2E294E', '1B998B', 'E71D36', 'C5D86D'] 
  },
  WHITE: {
    colorName: 'WHITE',
    colorSet: ['1BE7FF', '6EEB83', 'E4FF1A', 'E8AA14', 'FF5714', 'F46036', '2E294E', '1B998B', 'E71D36', 'C5D86D'] 
  },
  ALT: {
    colorName: 'COLORNAME',
    colorSet: ['363635', '62A87C', '617073', '4D685A', '545775', '202C39', '1F487E', '60B2E5', 'AEECEF']
  }
};

var app = new Vue({
  el: '#app',
  data: {
    colorTheme: Theme,
    glitchEnabled: false,
    showMenu: false,
    objects: [],
    threeDisplayClass: null,
    showWebGLNotice: false,
    blurClass: null
  },
  watch: {
    '$route' (to, from){
      if(to.path === '/'){

        this.checkForScrollHeader();

        if(!Detector.webgl){
          console.log("Unable to initialize WebGL. Your browser or machine may not support it.");
          this.threeDisplayClass = 'noWebGL';
          this.showWebGLNotice = true;
          return;
        }

        this.threeDisplayClass = null;
        this.animate();
        this.glitchEffect();
      } else {
        this.threeDisplayClass = 'hide-3d';
      }
    }
  },
  methods: {
    home: function(event){
      if(this.showMenu){
        this.showMenu = false;
        this.blurClass = null;
      }
      router.push('/');
    },
    menu: function(event){
      this.showMenu = !this.showMenu;
      if(this.showMenu){
        this.blurClass = 'blur';
        document.body.style.overflowY = "hidden";
      } else {
        this.blurClass = null;
        document.body.style.overflowY = "auto";
      }
    },
    initScene: function(){
      container = document.getElementById( 'threeDisplay' );

      //CAMERA
      camera = new THREE.PerspectiveCamera( 70, $(container).width() / $(container).height(), 1, 10000 );
      camera.position.z = 4000;

      //SCENE
      scene = new THREE.Scene();
      this.generateSceneObjects();
      //this.generateGrid();
      
      //LIGHT
      var light = new THREE.SpotLight( 0xffffff, 0.3 );
      light.position.set(0, 5000, 0 );
      scene.add( light );


      var backgroundColor;

      if(Theme === 'BLACK'){
        backgroundColor = 0x000000;
        scene.add( new THREE.AmbientLight( 0xd0d0d0 ) );
      } else {
        backgroundColor = 0xeeeeee;
        scene.add( new THREE.AmbientLight( 0xc5c5c5 ) );
      }

      renderer = new THREE.WebGLRenderer( { antialias: true } );
      renderer.setClearColor(backgroundColor); //Background color

      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize($(container).width(), $(container).height());

      renderer.sortObjects = false;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFShadowMap;
      container.appendChild( renderer.domElement );


      //CAMERA CONTROLS
      controls = new THREE.OrbitControls( camera, renderer.domElement );
      controls.rotateSpeed = 1;
      //controls.minDistance = 1000;
      controls.maxDistance = 5000;

      //Composer
      composer = new THREE.EffectComposer( renderer );
      composer.addPass( new THREE.RenderPass( scene, camera));

      composer2 = new THREE.EffectComposer(renderer);
      composer2.addPass( new THREE.RenderPass( scene, camera))

      //Glitch
      glitchPass = new THREE.GlitchPass();
      glitchPass.renderToScreen = true;
      composer.addPass( glitchPass );
      glitchPass.goWild = true;

      //Blur
      var blurAmount = 0.005;

      hblur = new THREE.ShaderPass( THREE.HorizontalBlurShader );
      hblur.material.uniforms.h.value = blurAmount;
      composer2.addPass( hblur );

      vblur = new THREE.ShaderPass( THREE.VerticalBlurShader );
      vblur.renderToScreen = true;
      vblur.material.uniforms.v.value = blurAmount;
      composer2.addPass( vblur );

      window.addEventListener( 'resize', this.onWindowResize, false );
    },
    getRandomColor: function(customThemeName){
      var randomColor;

      if(customThemeName){
        randomColor = colorTheme[customThemeName].colorSet[Math.floor(Math.random()*colorTheme[customThemeName].colorSet.length)];
      } else {
        randomColor = colorTheme[Theme].colorSet[Math.floor(Math.random()*colorTheme[Theme].colorSet.length)];
      }

      return parseInt('0x' + randomColor);
    },
    generateGrid: function(){

      var material = new THREE.LineBasicMaterial({
        color: 0xFFFFFF
      });

      for (var j = 4; j >= 0; j--) {
        for (var i = 50 - 1; i >= 0; i--) {

          var geometry = new THREE.Geometry();
          var material = new THREE.LineBasicMaterial({color: this.getRandomColor('ALT')});

          geometry.vertices.push(
            new THREE.Vector3( (i*100), 1000, (j*100) ),
            new THREE.Vector3( (i*100), 500, (j*100) )
          );

          var line = new THREE.Line( geometry, material );
          line.translateZ(j*100);
          scene.add( line );
        };
      };

    },
    generateSceneObjects: function(){

      var group = new THREE.Object3D();

      var geometry = new THREE.BoxGeometry( 40, 30, 40 );

      for ( var i = 0; i < 80; i ++ ) {

        var object = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial({
            color: this.getRandomColor()
          })
        );

        var spread = 1700;

        object.position.x = (Math.round(Math.random()) * 2 - 1) * Math.random() * spread;
        object.position.y = (Math.round(Math.random()) * 2 - 1) * Math.random() * spread;
        object.position.z = (Math.round(Math.random()) * 2 - 1) * Math.random() * spread;

        object.rotation.x = Math.random() * 2 * Math.PI;
        object.rotation.y = Math.random() * 2 * Math.PI;
        object.rotation.z = Math.random() * 2 * Math.PI;

        var masterScale = 1;

        object.scale.x = (10*Math.random() * 2 + 1)*masterScale;
        object.scale.y = (2*Math.random() * 2 + 1)*masterScale;
        object.scale.z = (1.5*Math.random() * 2 + 1)*masterScale;

        object.castShadow = true;
        object.receiveShadow = false;

        group.add( object );

        this.objects.push( object );
      }

      scene.add(group);
    },
    animate: function(){
      if(!this.threeDisplayClass){
        frame = requestAnimationFrame( this.animate );
        this.render();
        this.rotateBlocks();
      }
    },
    rotateBlocks: function(){
      for (var i = this.objects.length - 1; i >= 0; i--) {
        this.objects[i].rotateX(0.0008);
        this.objects[i].rotateY(0.0008);
        this.objects[i].rotateZ(0.0008);
      }
      scene.children[0].rotateY(0.0002);
    },
    render: function(){
      controls.update();
      if(this.glitchEnabled){
        composer.render();
      } else if (this.showMenu) {
        composer2.render();
      } else {
        renderer.render( scene, camera );
      }
    },
    onWindowResize: function(){
      camera.aspect = $(container).width() / $(container).height();
      camera.updateProjectionMatrix();

      renderer.setSize($(container).width(), $(container).height());
      composer.setSize( window.innerWidth, window.innerHeight );

    },
    glitchEffect: function(){
      this.glitchEnabled = true;

      var self = this;
      setTimeout(function(){
        self.glitchEnabled = false;
      }, 300);

    },
    checkForScrollHeader: function(){
      if(document.getElementById('header').classList.length > 0){
        document.getElementById('header').classList.remove('darkHeader');
      }
    }
  },
  mounted: function(){

    var currentPath = router.history.current.path;

    if(currentPath === '/'){
      this.threeDisplayClass = null;
    } else {
      this.threeDisplayClass = 'hide-3d';
    }

    if(!Detector.webgl){
      console.log("Unable to initialize WebGL. Your browser or machine may not support it.");
      this.threeDisplayClass = 'noWebGL';
      this.showWebGLNotice = true;
      return;
    }

    this.initScene();
    this.animate();
    this.glitchEffect();

  },
  router
});

