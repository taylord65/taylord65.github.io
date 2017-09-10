//TODO
//Detect no three.js
//texture of grid on plane
//Headline as picture on plane
//Canvas to do this?
//Change sandwich to Work?

//GLOBAL VARS
var container, stats;
var camera, controls, scene, renderer, composer;
var frame;
var Theme = 'BLACK'; // BLACK || WHITE
var counter = 0;

var colorTheme = {
  BLACK: {
    colorName: 'BLACK',
    colorSet: ['1BE7FF', '6EEB83', 'E4FF1A', 'E8AA14', 'FF5714',
                'F46036', '2E294E', '1B998B', 'E71D36', 'C5D86D'] 
    // colorSet: ['363635', '62A87C', '617073', '4D685A', '545775', '202C39', '1F487E', '60B2E5', 'AEECEF']
  },
  WHITE: {
    colorName: 'WHITE',
    colorSet: ['1BE7FF', '6EEB83', 'E4FF1A', 'E8AA14', 'FF5714',
                'F46036', '2E294E', '1B998B', 'E71D36', 'C5D86D'] 
  }
};

const Soccer1 = { 
  template: '#soccer1',
  // template: '<div class="portfolio-feature"></div>',
  created: function(){
    window.cancelAnimationFrame(frame);
    $('.app-container canvas').hide();
  } 
};

const Saildrone = { 
  template: '<div class="portfolio-feature"></div>',
  created: function(){
    window.cancelAnimationFrame(frame);
  } 
};

const Home = { 
  template: '<transition name="fade"><div class="headline-container"><div class="headline"> <h1>Taylor Dotsikas</h1> <h2>Product Desginer and Developer</h2> </div></div> </transition>',
  created: function(){
    $('.app-container canvas').show();
  }
};

const Menu = {
  template: '#menu',
  data: function() {
    return {
      soccerRoute: 'soccer1',
      sailDroneRoute: 'saildrone'
    }
  },
  methods: {
    routeTo: function(event, route){
      this.showMenu = !this.showMenu;
      router.push(route);
    },
    closeMenu: function(event){
      router.go(window.history.back());
    } 
  }
};

const routes = [
  { path: '/soccer1', component: Soccer1 },
  { path: '/saildrone', component: Saildrone },
  { path: '/', component: Home},
  { path: '/nav', component: Menu}
];

const router = new VueRouter({
  routes
});

Vue.component('iphone-component', {
  props: ['src'],
  template: '#iphone'
});

var app = new Vue({
  el: '#app',
  data: {
    colorTheme: Theme,
    showMenu: false,
    objects: []
  },
  methods: {
    home: function(event){
      router.push('/');
    },
    menu: function(event){
      router.push('nav');
    },
    initScene: function(){
      container = document.getElementById( 'threeDisplay' );

      //CAMERA
      camera = new THREE.PerspectiveCamera( 70, $(container).width() / $(container).height(), 1, 10000 );
      camera.position.z = 2500;

      //CAMERA CONTROLS
      controls = new THREE.OrbitControls( camera );
      controls.rotateSpeed = 1;
      controls.minDistance = 1000;
      controls.maxDistance = 2000;
      //controls.enableZoom = false;


      var rangeLimiter;
      var rangeLimiter_rads;

      if(Theme == 'BLACK'){
        rangeLimiter = 80;
      } else {
        rangeLimiter = 30;

        rangeLimiter_rads = rangeLimiter * (Math.PI/180); 
        // How far you can orbit vertically, upper and lower limits.
        // Range is 0 to Math.PI radians.
        controls.minPolarAngle = 0 + rangeLimiter_rads; // radians
        controls.maxPolarAngle = Math.PI - rangeLimiter_rads; // radians

        // How far you can orbit horizontally, upper and lower limits.
        // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
        controls.minAzimuthAngle = - Math.PI/2 + rangeLimiter_rads; // radians
        controls.maxAzimuthAngle = Math.PI/2 - rangeLimiter_rads; // radians
      }



      //SCENE
      scene = new THREE.Scene();



      this.generateSceneObjects();
      //this.generateGrid();

      
      //LIGHT

      var light = new THREE.SpotLight( 0xffffff, 0.3 );
      light.position.set(0, 5000, 0 );
      // light.castShadow = true;

      // light.shadow = new THREE.LightShadow( new THREE.PerspectiveCamera( 50, 1, 200, 10000 ) );
      // light.shadow.bias = - 0.00022;

      // light.shadow.mapSize.width = 2048;
      // light.shadow.mapSize.height = 2048;

      scene.add( light );


      var backgroundColor;

      if(Theme === 'BLACK'){
        backgroundColor = 0x000000;
        scene.add( new THREE.AmbientLight( 0x262626 ) );
      } else {
        backgroundColor = 0xeeeeee;
        scene.add( new THREE.AmbientLight( 0xc5c5c5 ) );

        //PLANE
        var shadowMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff } );
        var shadowGeo = new THREE.PlaneBufferGeometry( 1242, 2206, 1, 1 );
        mesh = new THREE.Mesh( shadowGeo, shadowMaterial );
        mesh.material.side = THREE.DoubleSide;
        mesh.receiveShadow = true;
        mesh.position.y = 0;
        mesh.position.z = -50;
        scene.add( mesh );
      }

      renderer = new THREE.WebGLRenderer( { antialias: true } );
      renderer.setClearColor(backgroundColor); //Background color

      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize($(container).width(), $(container).height());

      renderer.sortObjects = false;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFShadowMap;
      container.appendChild( renderer.domElement );
      window.addEventListener( 'resize', this.onWindowResize, false );
    },
    generateGrid: function(){

      var material = new THREE.LineBasicMaterial({
        color: 0x3da9ff
      });

      for (var j = 4; j >= 0; j--) {
        for (var i = 50 - 1; i >= 0; i--) {

          var geometry = new THREE.Geometry();

          geometry.vertices.push(
            new THREE.Vector3( -1000, (i*100), 0 ),
            new THREE.Vector3( 1000, (i*100), 0 )
          );

          var line = new THREE.Line( geometry, material );
          line.translateZ(j*1000);
          scene.add( line );
        };
      };

    },
    generateSceneObjects: function(){

      function getRandomRolor() {
              
        var randomColor = colorTheme[Theme].colorSet[Math.floor(Math.random()*colorTheme[Theme].colorSet.length)];


        return parseInt('0x' + randomColor);
      }

      var geometry = new THREE.BoxGeometry( 40, 30, 40 );

      for ( var i = 0; i < 80; i ++ ) {

        var object = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial({
            color: getRandomRolor()
          })
        );

        object.position.x = (Math.round(Math.random()) * 2 - 1) * Math.random() * 1000;
        object.position.y = (Math.round(Math.random()) * 2 - 1) * Math.random() * 1000;
        object.position.z = (Math.round(Math.random()) * 2 - 1) * Math.random() * 1000;
        //object.position.z = 500;

        object.rotation.x = Math.random() * 2 * Math.PI;
        object.rotation.y = Math.random() * 2 * Math.PI;
        object.rotation.z = Math.random() * 2 * Math.PI;

        object.scale.x = 10*Math.random() * 2 + 1;
        object.scale.y = 2*Math.random() * 2 + 1;
        object.scale.z = 1.5*Math.random() * 2 + 1;

        object.castShadow = true;
        object.receiveShadow = false;

        scene.add( object );

        this.objects.push( object );
      }
    },
    animate: function(){
      frame = requestAnimationFrame( this.animate );
      this.render();
    },
    rotateBlocks: function(){
      for (var i = this.objects.length - 1; i >= 0; i--) {
        this.objects[i].rotateX(0.01);
        this.objects[i].rotateY(0.01);
        this.objects[i].rotateZ(0.01);
      }
    },
    render: function(){
      controls.update();

      renderer.render( scene, camera );
    },
    onWindowResize: function(){
      camera.aspect = $(container).width() / $(container).height();
      camera.updateProjectionMatrix();

      renderer.setSize($(container).width(), $(container).height());
    }
  },
  mounted: function(){
    //this.initScene();
    //this.animate();
  },
  router
});


