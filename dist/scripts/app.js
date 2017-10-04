var Fifthlight = {
  props: ['menuOpen'], 
  template: '#fifthlight',
  data: function(){
    return {
      portfolioFeature: 'portfolio-feature',
      src: "https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/fl/fl_cover_dark.jpg"
    }
  },
  methods: {
    closemenu: function(menuOpen){
      if(menuOpen){
        //emit close menu
        this.$emit('menuaction');
      }
    }
  },
  created: function(){

    $('<img/>').attr('src', this.src).on('load', function() {
       $(this).remove();
       $('#fl_background').css('background-image', 'url(' + this.src + ')');
    });
  }
};
var Home = {
  props: ['menuOpen'], 
  template: '\
    <div  class="headline-container">\
      <div v-if="!menuOpen" class="headline animated fadeIn">\
        <h1>Taylor Dotsikas</h1>\
        <h2>UI Designer</h2>\
        <h2>Front end Developer</h2>\
      </div>\
    </div>\
    '
};
var Saildrone = {
  props: ['menuOpen'], 
  template: '#saildrone',
  data: function(){
    return {
      portfolioFeature: 'portfolio-feature',
      src: "https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/sd/sd_cover.jpg"
    }
  },
  methods: {
    closemenu: function(menuOpen){
      if(menuOpen){
        //emit close menu
        this.$emit('menuaction');
      }
    }
  },
  created: function(){

    $('<img/>').attr('src', this.src).on('load', function() {
       $(this).remove();
       $('#sd_background').css('background-image', 'url(' + this.src + ')');
    });
  }
};
var Soccer1 = {
  props: ['menuOpen'],
  template: '#soccer1',
  data: function(){
    return {
      portfolioFeature: 'portfolio-feature',
      // src: 'https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/webapp.soccer-1.com-.jpg'
      src: 'https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/s1_cover_faded.png'
    }
  },
  created: function(){

    $('<img/>').attr('src', this.src).on('load', function() {
       $(this).remove();
       $('#s1_background').css('background-image', 'url(' + this.src + ')');
    });
  }
};
var Teabot = {
  props: ['menuOpen'], 
  template: '#teabot',
  data: function(){
    return {
      portfolioFeature: 'portfolio-feature',
      src: "https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/tb/tb_new_cover.jpg"
    }
  },
  methods: {
    closemenu: function(menuOpen){
      if(menuOpen){
        //emit close menu
        this.$emit('menuaction');
      }
    }
  },
  created: function(){

    $('<img/>').attr('src', this.src).on('load', function() {
       $(this).remove();
       $('#tb_background').css('background-image', 'url(' + this.src + ')');
    });
  }
};
var routes = [
  { path: '/soccer1', component: Soccer1, name: 'Soccer-1' },
  { path: '/saildrone', component: Saildrone, name:'Saildrone' },
  { path: '/fifthlight', component: Fifthlight, name: 'Fifthlight' },
  { path: '/teabot', component: Teabot, name: 'teaBot'},
  { path: '/', component: Home, name: 'home' }
];

var router = new VueRouter({
	routes: routes
});
Vue.component('check-it-out', {
  props: ['linkoptions'],
  data: function(){
    return {
      viewOptions: false,
      options: this.linkoptions
    }
  },
  methods: {
    showViewOptions: function(){
      if(!this.viewOptions){
        if(this.options.length > 1){
          this.viewOptions = !this.viewOptions;
        } else {
          window.open(this.options[0].url);
        }
      }
    },
    navToLink: function(url){
      window.open(url);
    }
  },
  template: '\
    <div class="checkItOutButton" v-on:click="showViewOptions" :class="[{viewOptionsOpen: viewOptions}]">\
      <span v-if="!viewOptions">Check it out</span>\
      <span v-if="viewOptions" class="link-option" v-for="option in options" :key="option.id" v-on:click="navToLink(option.url)">\
        {{option.title}}\
        <svg viewBox="0 0 64 64" width="20px" height="20px"><path d="M59.927 31.985l.073.076-16.233 17.072-3.247-3.593L51.324 34H4v-4h47.394L40.52 18.407l3.247-3.494L60 31.946l-.073.039z"></path></svg>\
      </span>\
    </div>\
  '
});
Vue.component('desktop', {
  props: ['src'],
  template: '\
	<div class="desktop-video" v-autofadedesktop>\
		<img src="https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/macbook2X_noLabel.jpg">\
		<div class="video-container">\
			<video width="100%" height="auto" autoplay loop muted playsinline>\
				<source :src="src" type="video/mp4">\
			</video>\
		</div>\
	</div>\
	',
	directives: {
		autofadedesktop: {
		  inViewport: function(el) {
		    var rect = el.getBoundingClientRect()
		    return !(rect.bottom < 0 || rect.right < 0 || 
		             rect.left > window.innerWidth ||
		             rect.top > window.innerHeight)
		  },
		  bind: function(el, binding) {

		    el.classList.add('before-enter')
		    el.$onScroll = function() {
		      if (binding.def.inViewport(el)) {
		        el.classList.add('enter')
		        el.classList.remove('before-enter')

		        //Select the video node and autoplay. 
		        //If html changes this must change.
		        el.childNodes[2].children[0].autoplay = true;
		        el.childNodes[2].children[0].load();

		        binding.def.unbind(el, binding)        
		      }
		    }
		    document.addEventListener('scroll', el.$onScroll)
		  },
		  inserted: function(el, binding) {
		    el.$onScroll() 
		  },
		  
		  unbind: function(el, binding) { 
		    document.removeEventListener('scroll', el.$onScroll)
		    delete el.$onScroll
		  }  
		}
	}
});
Vue.component('portfolio-feature-footer', {
  template: '\
    <footer v-on:click="showEmail" v-bind:class="{ emailFooter: emailOn }">\
		<div v-if="emailOn" class="email-display">\
			<input type="text" onClick="this.setSelectionRange(0, this.value.length)" value="taylordotsikas@gmail.com">\
		</div>\
		<div v-else class="center-content">\
			<h1>Taylor Dotsikas</h1>\
			<span>Get in touch</span>\
		</div>\
    </footer>\
  ',
  data: function(){
  	return {
  		emailOn: false
  	}
  },
  methods: {
  	showEmail: function(){
  		this.emailOn = true;
  	}
  }
});
Vue.component('header-menu', {
  data: function(){
    return {
      showFill: false,
      route: undefined
    }
  },
  props: ['showMenu'],
  template: '\
    <div>\
      <header>\
        <div class="home-icon" v-on:click="home">\
          <svg version="1.1" x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">\
          <rect fill="#A01212" width="50" height="50"/> <g> <path fill="#FFFFFF" d="M20,41.7V17.1h-9V8.3H39v8.8h-8.9v24.6H20z"/> </g> <circle fill="#FFFFFF" cx="37" cy="40.3" r="1.8"/> </svg>\
        </div>\
      </header>\
      <transition name="headerFade">\
        <div v-if="showFill" class="rect-fill">\
          <h1>{{ route }}</h1>\
        </div>\
      </transition>\
    </div>\
  ',
  created: function(){
    this.route = this.$route.name;
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function(){
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    home: function(){
      this.showFill = false;
      this.$emit('homeaction');
    },
    handleScroll: function(event){
      if(router.history.current.path !== '/'){
        var headerHeight = $("header").outerHeight();
        var scrollUpSectionPosition;

        if($(".scrollUpSection").offset()){
          scrollUpSectionPosition = $(".scrollUpSection").offset().top - headerHeight;
        }

        if($(window).scrollTop() > scrollUpSectionPosition){
          if(!this.showFill){
            this.showFill = true;
          }
        } else {
          if(this.showFill){
            this.showFill = false;
          }
        }
      }
    }
  },
  watch: {
    '$route': function(to, from){
      this.route = to.name;
      if(this.route === 'home'){
        this.showFill = false;
      }
    }
  }
});


Vue.component('ipad', {
  props: ['src', 'landscape'],
  template: '\
	<div v-bind:class="[{ipadFeatureLandscape: landscape}, {ipadFeaturePortrait: !landscape}]" v-autofadeipad>\
		<img :src="src">\
	</div>\
	',
	directives: {
		autofadeipad: {
		  inViewport: function(el) {
		    var rect = el.getBoundingClientRect()
		    return !(rect.bottom < 0 || rect.right < 0 || 
		             rect.left > window.innerWidth ||
		             rect.top > window.innerHeight)
		  },
		  bind: function(el, binding) {

		    el.classList.add('before-enter')
		    el.$onScroll = function() {
		      if (binding.def.inViewport(el)) {
		        el.classList.add('enter')
		        el.classList.remove('before-enter')

		        binding.def.unbind(el, binding)        
		      }
		    }
		    document.addEventListener('scroll', el.$onScroll)
		  },
		  inserted: function(el, binding) {
		    el.$onScroll() 
		  },
		  
		  unbind: function(el, binding) { 
		    document.removeEventListener('scroll', el.$onScroll)
		    delete el.$onScroll
		  }  
		}
	}
});

Vue.component('iphone-component', {
  props: ['src'],
  template: '\
    <div class="iphone-container" v-autofade>\
      <iphone-svg></iphone-svg>\
      <div class="video-container">\
        <video width="100%" height="auto" loop muted playsinline>\
          <source :src="src" type="video/mp4">\
        </video>\
      </div>\
    </div>\
  ',
  directives: {
    autofade: {
      inViewport: function(el) {
        var rect = el.getBoundingClientRect()
        return !(rect.bottom < 0 || rect.right < 0 || 
                 rect.left > window.innerWidth ||
                 rect.top > window.innerHeight)
      },
      bind: function(el, binding) {

        el.classList.add('before-enter')
        el.$onScroll = function() {
          if (binding.def.inViewport(el)) {
            el.classList.add('enter')
            el.classList.remove('before-enter')

            //Select the video node and autoplay. 
            //If html changes this must change.
            el.childNodes[2].children[0].autoplay = true;
            el.childNodes[2].children[0].load();

            binding.def.unbind(el, binding)        
          }
        }
        document.addEventListener('scroll', el.$onScroll)
      },
      inserted: function(el, binding) {
        el.$onScroll()  
      },
      
      unbind: function(el, binding) {    
        document.removeEventListener('scroll', el.$onScroll)
        delete el.$onScroll
      }  
    }
  }
});


Vue.component('iphone-svg', {

  template: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 294.7 600" enable-background="new 0 0 294.7 600" xml:space="preserve"> <g> <g> <path fill="#595A60" d="M293.7,555c-0.1,24.8-20.3,45-45.1,45H48.1c-24.8,0-45-20.2-45-45V45c0-24.8,20.2-45,45-45h201.7 c24.8,0,45,20.2,44.9,45L293.7,555z"/> <path fill="#83848A" d="M48.1,598c-23.7,0-43-19.3-43-43V45c0-23.7,19.3-43,43-43h201.7c11.4,0,22.2,4.5,30.3,12.6 s12.6,18.9,12.6,30.4l-1.1,510c0,23.7-19.4,43-43.1,43H48.1z"/> <path fill="#111111" d="M48.1,596c-22.6,0-41-18.4-41-41V45c0-22.6,18.4-41,41-41h201.7c10.9,0,21.2,4.3,28.9,12 c7.8,7.8,12,18,12,28.9l-1.1,510c0,22.6-18.5,41-41.1,41H48.1z"/> <path d="M48.1,594c-21.5,0-39-17.5-39-39V45c0-21.5,17.5-39,39-39h201.7c10.4,0,20.1,4.1,27.5,11.5c7.4,7.4,11.4,17.2,11.4,27.5 l-1.1,510c0,21.5-17.6,39-39.1,39L48.1,594L48.1,594L48.1,594z"/> <path fill="#323232" d="M12.5,555V45c0-14,6.7-26.5,17.2-34.3C17.4,17.3,9.1,30.2,9.1,45v510c0,14.8,8.3,27.7,20.5,34.3 C19.2,581.5,12.5,569,12.5,555z"/> </g> <path d="M19.6,530.8V73.2h258.7l-1.2,457.7H19.6z M276.6,532.3c1.1,0,2-0.9,2-2l1.2-456.7c0-1.1-0.9-2-2-2H20.1c-1.1,0-2,0.9-2,2 v456.7c0,1.1,0.9,2,2,2H276.6z"/> <g> <linearGradient id="IPHONESVG_1_" gradientUnits="userSpaceOnUse" x1="-137.2615" y1="705.5685" x2="-136.7999" y2="705.0101" gradientTransform="matrix(39.88 0 0 -39.882 5606.9712 28685.8789)"> <stop  offset="0" style="stop-color:#0A0A0A"/> <stop  offset="0.5263" style="stop-color:#353535"/> <stop  offset="1" style="stop-color:#656565"/> </linearGradient> <path fill="url(#IPHONESVG_1_)" d="M148.3,541.4c-12.9,0-23.4,10.5-23.4,23.4c0,6.5,2.6,12.3,6.8,16.5l33-33 C160.4,543.9,154.5,541.4,148.3,541.4z"/> <linearGradient id="IPHONESVG_2_" gradientUnits="userSpaceOnUse" x1="-136.6682" y1="704.8604" x2="-137.0466" y2="705.2754" gradientTransform="matrix(39.881 0 0 -39.881 5613.96 28692.0156)"> <stop  offset="0" style="stop-color:#0A0A0A"/> <stop  offset="0.4251" style="stop-color:#353535"/> <stop  offset="0.83" style="stop-color:#575757"/> </linearGradient> <path fill="url(#IPHONESVG_2_)" d="M171.6,564.8c0-6.2-2.5-12.1-6.8-16.5l-33,33c4.4,4.4,10.3,6.9,16.5,6.8 C161.2,588.1,171.6,577.7,171.6,564.8z"/> <path d="M127.3,564.8c0,11.5,9.4,20.9,20.9,20.9c11.5,0,20.9-9.4,20.9-20.9c0-11.5-9.4-20.9-20.9-20.9 C136.7,543.9,127.3,553.2,127.3,564.8z"/> </g> <linearGradient id="IPHONESVG_3_" gradientUnits="userSpaceOnUse" x1="-125.7053" y1="697.9696" x2="-124.9982" y2="697.2625" gradientTransform="matrix(9.308 0 0 -9.308 1268.4148 6531.4409)"> <stop  offset="0" style="stop-color:#1A1A1A"/> <stop  offset="0.5992" style="stop-color:#353535"/> <stop  offset="1" style="stop-color:#5A5A5A"/> </linearGradient> <path fill="url(#IPHONESVG_3_)" d="M97,38c0,2.6,2.1,4.7,4.7,4.7s4.7-2.1,4.7-4.7c0,0,0,0,0,0c0-2.6-2.1-4.7-4.7-4.7 C99.1,33.4,97,35.5,97,38"/> <path fill="#3F5A83" d="M99.8,39.1c0-0.4,0.4-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8c0,0.4-0.4,0.8-0.8,0.8S99.8,39.5,99.8,39.1"/> <g> <linearGradient id="IPHONESVG_4_" gradientUnits="userSpaceOnUse" x1="-95.5096" y1="705.7754" x2="-95.5096" y2="704.7837" gradientTransform="matrix(3.134 0 0 -41.5 300.894 29474.9863)"> <stop  offset="0" style="stop-color:#666666"/> <stop  offset="0.1417" style="stop-color:#ADADAD"/> <stop  offset="0.8302" style="stop-color:#B8B8B8"/> <stop  offset="1" style="stop-color:#666666"/> </linearGradient> <path fill="url(#IPHONESVG_4_)" d="M1.5,185c-0.8,0-1.5,0.7-1.5,1.5L0,225c0,0.8,0.7,1.5,1.5,1.5h1.7V185H1.5z"/> <linearGradient id="IPHONESVG_5_" gradientUnits="userSpaceOnUse" x1="-54.2087" y1="705.7966" x2="-54.2087" y2="704.7376" gradientTransform="matrix(1.634 0 0 -41.273 89.394 29314.3867)"> <stop  offset="0" style="stop-color:#4F4F4F"/> <stop  offset="0.1417" style="stop-color:#7A7A7A"/> <stop  offset="0.8302" style="stop-color:#858585"/> <stop  offset="1" style="stop-color:#404040"/> </linearGradient> <path fill="url(#IPHONESVG_5_)" d="M1.6,187.2c0-0.8-0.3-1.5-0.7-2.1c-0.6,0.2-0.9,0.8-0.9,1.4L0,225c0,0.6,0.4,1.1,0.9,1.4 c0.5-0.6,0.7-1.3,0.7-2.1L1.6,187.2z"/> </g> <g> <linearGradient id="IPHONESVG_6_" gradientUnits="userSpaceOnUse" x1="-95.5096" y1="705.7754" x2="-95.5096" y2="704.7837" gradientTransform="matrix(3.134 0 0 -41.5 300.894 29420.9863)"> <stop  offset="0" style="stop-color:#666666"/> <stop  offset="0.1417" style="stop-color:#ADADAD"/> <stop  offset="0.8302" style="stop-color:#B8B8B8"/> <stop  offset="1" style="stop-color:#666666"/> </linearGradient> <path fill="url(#IPHONESVG_6_)" d="M1.5,131c-0.8,0-1.5,0.7-1.5,1.5L0,171c0,0.8,0.7,1.5,1.5,1.5h1.7V131H1.5z"/> <linearGradient id="IPHONESVG_7_" gradientUnits="userSpaceOnUse" x1="-54.2087" y1="705.7966" x2="-54.2087" y2="704.7376" gradientTransform="matrix(1.634 0 0 -41.273 89.394 29260.3867)"> <stop  offset="0" style="stop-color:#4F4F4F"/> <stop  offset="0.1417" style="stop-color:#7A7A7A"/> <stop  offset="0.8302" style="stop-color:#858585"/> <stop  offset="1" style="stop-color:#404040"/> </linearGradient> <path fill="url(#IPHONESVG_7_)" d="M1.6,133.2c0-0.8-0.3-1.5-0.7-2.1c-0.6,0.2-0.9,0.8-0.9,1.4L0,171c0,0.6,0.4,1.1,0.9,1.4 c0.5-0.6,0.7-1.3,0.7-2.1L1.6,133.2z"/> </g> <path fill="#212121" d="M285.2,555V45c0-14-6.7-26.5-17.2-34.3c12.2,6.6,20.5,19.5,20.5,34.3v510c0,14.8-8.3,27.7-20.5,34.3 C278.4,581.5,285.2,569,285.2,555z"/> <g> <path fill="#505050" d="M292.7,45.3l0,8.6h2l0-8.6"/> <path fill="#6E6E6E" d="M290.7,53.9h2l0-8.6h-2"/> <path fill="#505050" d="M5.1,45.3l0,8.6h-2l0-8.6"/> <path fill="#6E6E6E" d="M7.1,53.9h-2l0-8.6h2"/> </g> <path d="M19.6,532.3c-0.8,0-1.5-0.7-1.5-1.5V73.2c0-0.8,0.7-1.5,1.5-1.5h258.1c0.8,0,1.5,0.7,1.5,1.5v457.7c0,0.8-0.7,1.5-1.5,1.5 H19.6z M277.7,530.8V73.2H19.6v457.7H277.7z"/> <path fill="#1A1A1A" stroke="#0D0D0D" stroke-width="0.136" d="M128.1,40.2c-1.2,0-2.2-1-2.2-2.2v-0.2c0-1.2,1-2.2,2.2-2.2h41.7 c1.2,0,2.2,1,2.2,2.2V38c0,1.2-1,2.2-2.2,2.2H128.1z"/> <path fill="none" d="M128.1,35.6c-1.2,0-2.2,1-2.2,2.2V38c0,1.2,1,2.2,2.2,2.2h41.7c1.2,0,2.2-1,2.2-2.2v-0.2c0-1.2-1-2.2-2.2-2.2 H128.1z"/> <radialGradient id="IPHONESVG_8_" cx="-119.7891" cy="693.9844" r="0.5" gradientTransform="matrix(6.808 0 0 -6.807 963.9155 4742.0396)" gradientUnits="userSpaceOnUse"> <stop  offset="0" style="stop-color:#454545"/> <stop  offset="0.5587" style="stop-color:#353535"/> <stop  offset="1" style="stop-color:#1A1A1A"/> </radialGradient> <path fill="url(#IPHONESVG_8_)" d="M145,18c0,1.9,1.5,3.4,3.3,3.5c1.9,0,3.4-1.5,3.5-3.3c0,0,0-0.1,0-0.1c0-1.9-1.6-3.4-3.5-3.3 C146.5,14.7,145,16.2,145,18"/> </g> </svg>'
});
Vue.component('nav-menu', {
  props: ['showMenu'],
  template: '\
    <div>\
    <transition name="slide">\
      <div v-if="showMenu" class="menu">\
        <h1>Featured Work</h1>\
        <div v-on:click="routeTo($event, soccerRoute )" class="feature animated fadeInUp">\
          <h2>Soccer-1</h2>\
        </div>\
        <div v-on:click="routeTo($event, sailDroneRoute )" class="feature animated fadeInUp">\
          <h2>Saildrone</h2>\
        </div>\
        <div v-on:click="routeTo($event, fifthlightRoute )" class="feature animated fadeInUp">\
          <h2>Fifthlight</h2>\
        </div>\
        <div v-on:click="routeTo($event, teabotRoute )" class="feature animated fadeInUp">\
          <h2>teaBot</h2>\
        </div>\
        <h1>taylordotsikas@gmail.com</h1>\
      </div>\
    </transition>\
    \
    <div class="menu-button-container" v-on:click="menuTrigger">\
      <div id="menuIcon"  v-bind:class="[{open: showMenu}]">\
        <span></span>\
        <span></span>\
        <span></span>\
      </div>\
      <span id="workLabel" v-if="!showMenu">WORK</span>\
    </div>\
    \
    </div>\
  ',
  data: function() {
    return {
      soccerRoute: 'soccer1',
      sailDroneRoute: 'saildrone',
      fifthlightRoute: 'fifthlight',
      teabotRoute: 'teabot',
      open: 'open'
    }
  },
  methods: {
    menuTrigger: function(){
      this.$emit('menuaction');
    },
    routeTo: function(event, route){
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      router.push(route);
      this.$emit('menuaction');
    }
  }
});
Vue.component('scroll-indicator', {
  template: '\
	<div class="scroll-indicator">\
		<svg class="animated bounce" version="1.1" width="512" height="512" viewBox="0 0 512 512">\
			<path fill="#FFFFFF" d="M158.628 177.372l-45.256 45.256 142.628 142.627 142.627-142.628-45.254-45.254-97.373 97.372z"></path>\
		</svg>\
	</div>\
  '
});
Vue.component('side-panel', {
  template: '\
  	<div>\
		<div v-on:click="prevRoute" class="side-text-left">\
			<svg version="1.1" width="512" height="512" viewBox="0 0 512 512">\
				<path fill="#FFFFFF" d="M158.628 177.372l-45.256 45.256 142.628 142.627 142.627-142.628-45.254-45.254-97.373 97.372z"></path>\
			</svg>\
		</div>\
		\
		<div v-on:click="nextRoute" class="side-text-right">\
			<svg version="1.1" width="512" height="512" viewBox="0 0 512 512">\
				<path fill="#FFFFFF" d="M158.628 177.372l-45.256 45.256 142.628 142.627 142.627-142.628-45.254-45.254-97.373 97.372z"></path>\
			</svg>\
		</div>\
	</div>\
  ',
  data: function(){
  	return {
  		route: null,
  		routeOrder: ['Soccer-1', 'Saildrone', 'Fifthlight', 'teaBot'],
  		urls: ['/soccer1', '/saildrone', '/fifthlight', '/teabot']
  	}
  },
  created: function(){
  	this.route = this.$route.name;
  },
  methods: {
  	prevRoute: function(){
  		var index = this.routeOrder.indexOf(this.route);
		document.body.scrollTop = document.documentElement.scrollTop = 0;

		if(index === 0){
			router.push(this.urls[this.urls.length-1]);
		} else {
			router.push(this.urls[index - 1]);
		}
  	},
  	nextRoute: function(){
  		var index = this.routeOrder.indexOf(this.route);
		document.body.scrollTop = document.documentElement.scrollTop = 0;

		if(index === (this.routeOrder.length - 1)){
			router.push(this.urls[0]);
		} else {
			router.push(this.urls[index + 1]);
		}
  	}
  }
});
Vue.component('tabbed-content', {
  data: function(){
    return {
      activeTabId: 0,
      tabContentClass: 'tab-content-area',
      tabTitleClass: 'tab-title',
      tabs: this.tabdata
    }
  },
  props: ['tabdata'],
  methods: {
    setActive: function(tab){

      var self = this;

      tab.isActive = true;
      this.activeTabId = tab.id;

      this.tabs.forEach(function(tab){

          if(tab.id !== self.activeTabId){
            tab.isActive = false;
          }
      });
    }
  },
  template: '\
  <div class="tabbed-content">\
    <div class="title-row">\
      <div v-for="tab in tabs" :class="[{activeTitle:tab.isActive}, tabTitleClass]" v-on:click="setActive(tab)">\
        {{tab.title}}\
      </div>\
    </div>\
    \
    <transition name="fade" mode="out-in">\
    <p v-if="tab.isActive" v-for="tab in tabs" :key="tab.id" :class="tabContentClass">\
      {{tab.text}}\
    </p>\
    </transition>\
  </div>\
  '
});
Vue.component('webgl-notice', {
  template: '\
    <div class="webgl-notice">\
      <span>Unable to initialize WebGL. Your browser or machine may not support it.</span>\
    </div>\
  '
});
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
    '$route': function(to, from){
      if(to.path === '/'){

        if(!Detector.webgl){
          console.log("Unable to initialize WebGL. Your browser or machine may not support it.");
          this.threeDisplayClass = 'noWebGL';
          this.showWebGLNotice = true;
          return;
        }

        this.threeDisplayClass = null;
        this.animate();
        this.glitchEffect(600);
      } else {
        cancelAnimationFrame(frame);
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
    closemenu: function(){
      //Used for when the menu is open and user clicks outside of menu
      if(this.showMenu){
        this.showMenu = !this.showMenu;
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
        frame = requestAnimationFrame( this.animate );
        this.render();
        this.rotateBlocks();      
    },
    rotateBlocks: function(){
      for (var i = this.objects.length - 1; i >= 0; i--) {
        this.objects[i].rotateX(0.0008);
        this.objects[i].rotateY(0.0008);
        this.objects[i].rotateZ(0.0008);
      }
      scene.children[0].rotateY(0.0005);
      scene.children[0].rotateX(0.0005);
      scene.children[0].rotateZ(-0.0005);
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
    glitchEffect: function(time){
      this.glitchEnabled = true;

      var self = this;
      setTimeout(function(){
        self.glitchEnabled = false;
      }, time);

    }
  },
  mounted: function(){

    var currentPath = router.history.current.path;

    this.initScene();

    if(currentPath === '/'){
      this.threeDisplayClass = null;
      this.animate();
      this.glitchEffect(300);
    } else {
      this.threeDisplayClass = 'hide-3d';
    }

    if(!Detector.webgl){
      console.log("Unable to initialize WebGL. Your browser or machine may not support it.");
      this.threeDisplayClass = 'noWebGL';
      this.showWebGLNotice = true;
      return;
    }

  },
  router: router
});

