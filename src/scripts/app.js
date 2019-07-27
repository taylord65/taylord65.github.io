var Fifthlight = {
  props: ['menuOpen'], 
  template: '#fifthlight',
  data: function(){
    return {
      portfolioFeature: 'portfolio-feature',
      src: "https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/fl/fl_cover_dark.jpg"
    }
  },
  created: function(){

    $('<img/>').attr('src', this.src).on('load', function() {
       $(this).remove();
       $('#fl_background').css('background-image', 'url(' + this.src + ')');
    });
  }
};
var Graphics = {
  props: ['menuOpen'], 
  template: '\
  <div v-bind:class="[{unfocusedFeature: menuOpen}, feature]">\
  <div class="rect-fill">\
    <h1 class="animated fadeIn">Graphic Design</h1>\
  </div>\
  <div class="swiper-container">\
      <div class="swiper-wrapper">\
          <div v-for="image in images" class="swiper-slide">\
            <img :src="image.src">\
          </div>\
      </div>\
      <div class="swiper-pagination"></div>\
      <div class="swiper-button-prev"></div>\
      <div class="swiper-button-next"></div>\
  </div>\
  </div>\
  ',
  data: function(){
    return {
      feature: 'graphics-feature',
      images: [
        {
          name: '',
          src: 'https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/graphics/Vagalume_infographic_single_strip.png'
        },
        {
          name: '',
          src: 'https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/graphics/beached_header.png'
        },
        {
          name: '',
          src: 'https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/graphics/blockpaint.png'
        },
        {
          name: '',
          src: 'https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/graphics/forest.png'
        },
        {
          name: '',
          src: 'https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/graphics/monument.png'
        },
        {
          name: '',
          src: 'https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/graphics/swordspear.png'
        },
        {
          name: '',
          src: 'https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/graphics/ollie_taylordotsikas_bbc_black.jpg'
        },
        {
          name: '',
          src: 'https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/graphics/poster_tdotgraphics-01.png'
        },
        {
          name: '',
          src: 'https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/graphics/t_icon.png'
        },
        {
          name: '',
          src: 'https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/graphics/tigergraffiti.gif'
        },
        {
          name: '',
          src: 'https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/graphics/tower_draft.gif'
        }
      ]
    }
  },
  mounted: function(){
    var mySwiper = new Swiper ('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
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
  created: function(){

    $('<img/>').attr('src', this.src).on('load', function() {
       $(this).remove();
       $('#tb_background').css('background-image', 'url(' + this.src + ')');
    });
  }
};
var Home = {
  props: ['menuOpen'], 
  template: '\
    <div class="headline-container">\
      <div class="headline" v-if="!menuOpen">\
        <h1>Taylor Dotsikas</h1>\
        <div class="secondary-headline-row">\
          <h2>UI UX Designer</h2>\
          <h2>Front end Developer</h2>\
        </div>\
        <div class="view-work" v-on:click="menuTrigger">\
          <span>view work</span>\
        </div>\
      </div>\
    </div>\
    ',
  methods: {
    menuTrigger: function(){
      this.$emit('menuaction');
    }
  }
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
var routes = [
	{ 
		path: '/soccer1', 
		component: Soccer1, 
		name: 'Soccer-1', 
		props: true  
	},
	{ 
		path: '/saildrone', 
		component: Saildrone, 
		name:'Saildrone', 
		props: true  
	},
	{ 
		path: '/fifthlight', 
		component: Fifthlight, 
		name: 'Fifth Light', 
		props: true  
	},
	{ 
		path: '/teabot',
		component: Teabot,
		name: 'teaBot',
		props: true 
	},
	{ 
		path: '/graphics',
		component: Graphics,
		name: 'graphics',
		props: true 
	},
	{ 
		path: '/', 
		component: Home, 
		name: 'home', 
		props: true
	}
];

var router = new VueRouter({
	routes: routes
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
Vue.component('scroll-indicator', {
  template: '\
	<div style="display: none;" class="scroll-indicator">\
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
  		routeOrder: ['Soccer-1', 'Saildrone', 'Fifth Light', 'teaBot'],
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
Vue.component('check-it-out', {
  props: ['linkoptions'],
  data: function(){
    return {
      viewOptions: false,
      linkoptions: this.linkoptions
    }
  },
  methods: {
    showViewOptions: function(){
      if(!this.viewOptions){
        if(this.linkoptions.length > 1){
          this.viewOptions = !this.viewOptions;
        } else {
          window.open(this.linkoptions[0].url);
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
      <span v-if="viewOptions" class="link-option" v-for="linkoption in linkoptions" :key="linkoption.id" v-on:click="navToLink(linkoption.url)">\
        {{linkoption.title}}\
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
  props: ['menuOpen'],
  template: '\
    <div>\
      <header>\
        <div class="home-icon" v-on:click="home" v-bind:class="{headerIconMenuOpen: menuOpen}">\
<svg version="1.1" x="0px" y="0px"viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve"> <g> <path fill="#FFFFFF" d="M25.6,53.4V21.9H14.1V10.6h35.8v11.3H38.5v31.5H25.6z"/> </g> <rect x="43.7" y="47.2" fill="#FFFFFF" width="6.2" height="6.2"/> </svg>\
        </div>\
      </header>\
      <transition name="headerFade">\
        <div v-if="showFill" class="rect-fill">\
          <h1 class="animated fadeIn">{{ route }}</h1>\
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
        <div class="menu-header">\
          \
        </div>\
        <div class="feature-list">\
          <div v-on:click="routeTo($event, soccerRoute )" class="feature">\
            <div class="feature-info">\
              <h1><div class="indicator"></div>Soccer-1</h1>\
              <span>Design and Development</span>\
            </div>\
            <div class="feature-date">\
              <span>2016-2017</span>\
            </div>\
          </div>\
          <div v-on:click="routeTo($event, sailDroneRoute )" class="feature">\
            <div class="feature-info">\
              <h1><div class="indicator"></div>Saildrone</h1>\
              <span>Design and Development</span>\
            </div>\
            <div class="feature-date">\
              <span>2016</span>\
            </div>\
          </div>\
          <div v-on:click="routeTo($event, fifthlightRoute )" class="feature">\
            <div class="feature-info">\
              <h1><div class="indicator"></div>Fifth Light</h1>\
              <span>Design</span>\
            </div>\
            <div class="feature-date">\
              <span>2015</span>\
            </div>\
          </div>\
          <div v-on:click="routeTo($event, teabotRoute )" class="feature">\
            <div class="feature-info">\
              <h1><div class="indicator"></div>teaBot</h1>\
              <span>Design</span>\
            </div>\
            <div class="feature-date">\
              <span>2014</span>\
            </div>\
          </div>\
          <div v-on:click="routeTo($event, graphicsRoute )" class="feature">\
            <div class="feature-info singleTitle">\
              <h1><div class="indicator"></div>Graphic Design</h1>\
            </div>\
            <div class="feature-date">\
            </div>\
          </div>\
        </div>\
        <div class="menu-footer">\
          <span>Get in touch</span>\
          <span class="email-link">taylordotsikas@gmail.com</span>\
        </div>\
      </div>\
    </transition>\
    \
    <div class="menu-button-container" v-on:click="menuTrigger">\
      <div id="menuIcon" v-bind:class="[{open: showMenu}]">\
        <span></span>\
        <span></span>\
        <span></span>\
      </div>\
      <transition name="fade">\
        <span id="workLabel" v-if="!showMenu">WORK</span>\
      </transition>\
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
      graphicsRoute: 'graphics',
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
var container, stats;
var camera, controls, scene, renderer, composer, composer2;
var glitchPass;
var frame;
var Theme = 'WHITE';
var cubeSize = 10500;
var cubeHeight = 3900;
var floorPositionY = -3000;

var colorTheme = {
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
        this.showWebGLNotice = false;
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
        if(controls){
          this.zoomCamera(200);
          controls.enableZoom = false;
        }
        document.body.style.overflowY = "hidden";
      } else {
        this.blurClass = null;
        if(controls){
          this.zoomCamera(-200);
          controls.enableZoom = true;
        }
        document.body.style.overflowY = "auto";
      }
    },
    closemenu: function(event){

      if(router.history.current.name === 'home'){
        if(event.path){
          if(event.path[0].nodeName !== 'CANVAS' ){
            return;
          }
        } else if (event.target){
          if(event.target.nodeName !== 'CANVAS'){
            return;
          }
        }
      }

      if(this.showMenu){
        this.showMenu = !this.showMenu;
        this.blurClass = null;
        if(controls){
          this.zoomCamera(-200);
          controls.enableZoom = true;
        }
        document.body.style.overflowY = "auto";
      }
    },
    initScene: function(){
      container = document.getElementById( 'threeDisplay' );

      //CAMERA
      camera = new THREE.PerspectiveCamera( 70, $(container).width() / $(container).height(), 1, cubeSize*3 );
      camera.position.z = 5061;
      camera.position.y = -1144;

      //SCENE
      scene = new THREE.Scene();
      this.generateSceneObjects();
      this.generateFloor();
      this.generateGrid();
      //this.generateSceneElements();
      
      //LIGHT
      var light = new THREE.SpotLight( 0xffffff, 0.3 );
      light.position.set(0, 5000, 0 );
      scene.add( light );


      var backgroundColor;

      if(Theme === 'BLACK'){
        backgroundColor = 0x000000;
        scene.add( new THREE.AmbientLight( 0xd0d0d0 ) );
      } else {
        backgroundColor = 0xFFFFFF;
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
      controls.maxDistance = 6000;

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
      var blurAmount = 0;

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
    generateSceneElements: function(){
      var geo = new THREE.BoxBufferGeometry( cubeSize/2, 200, cubeSize );
      var materials = [];

      for(var i=0; i<6; i++){
        var mat;
        if(i == 2){
            mat = new THREE.MeshLambertMaterial( {color: 0x2196f3, opacity: 0.2, transparent: true} );
        } else {
            mat = new THREE.MeshLambertMaterial( {color: 0x2196f3, opacity: 0.3, transparent: true} );
        }
        materials.push(mat);
      }

      var cube = new THREE.Mesh(geo, materials);

      cube.position.y = floorPositionY + 200;
      cube.position.x = cubeSize/4;
      cube.name = "water";

      scene.add( cube );


      var sandmaterials = [];

      for(var i=0; i<6; i++){
        var mat;
        if(i == 2){

          var texture = new THREE.TextureLoader().load('https://d1mly9lp7y5o9.cloudfront.net/59c3781d5ee0cafa55cd1064649b6951?filename=Grass.jpg');

          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;
          texture.anisotropy = 16;

          texture.minFilter = THREE.NearestMipMapLinearFilter;
          texture.repeat.set( 10, 10 );

          mat = new THREE.MeshPhongMaterial({map: texture});  

        } else {
          mat = new THREE.MeshLambertMaterial( {color: 0x2196f3, opacity: 0.3, transparent: true} );
        }
        sandmaterials.push(mat);
      }

      var sand = new THREE.Mesh(geo, sandmaterials);

      sand.position.y = floorPositionY + 200;
      sand.position.x = -cubeSize/4;
      scene.add(sand);
    },
    generateGrid: function(){

      var material = new THREE.LineBasicMaterial({
        color: 0xc9c9c9
      });

      //Uprights
      for (var i=0; i< 4; i++) {

        var x, z;
        var geometry = new THREE.Geometry();

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
        }

        geometry.vertices.push(
          new THREE.Vector3(x, cubeHeight, z),
          new THREE.Vector3(x, floorPositionY, z)
        );

        var line = new THREE.Line( geometry, material );
        scene.add( line );
      }

      for (var i=0; i< 4; i++) {

        var x1, x2, z1, z2;
        var geometry = new THREE.Geometry();

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
        }

        geometry.vertices.push(
          new THREE.Vector3(x1, cubeHeight, z1),
          new THREE.Vector3(x2, cubeHeight, z2)
        );

        var line = new THREE.Line( geometry, material );
        scene.add( line );
      }
    },
    generateSceneObjects: function(){

      var group = new THREE.Object3D();

      var geometry = new THREE.BoxGeometry( 40, 30, 40 );

      var numObjects = 120;

      for ( var i = 0; i < numObjects; i ++ ) {

        var object = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial({
            color: this.getRandomColor()
          })
        );

        var spread = 1800;

        object.position.x = (Math.round(Math.random()) * 2 - 1) * Math.random() * spread;
        object.position.y = (Math.round(Math.random()) * 2 - 1) * Math.random() * spread;
        object.position.z = (Math.round(Math.random()) * 2 - 1) * Math.random() * spread;

        object.rotation.x = Math.random() * 2 * Math.PI;
        object.rotation.y = Math.random() * 2 * Math.PI;
        object.rotation.z = Math.random() * 2 * Math.PI;

        var masterScale = 1;

        object.scale.x = (10*Math.random() * 2 + 1)*masterScale;
        object.scale.y = (5*Math.random() * 2 + 1)*masterScale;
        object.scale.z = (4*Math.random() * 2 + 1)*masterScale;

        object.castShadow = true;
        object.receiveShadow = false;

        group.add( object );

        this.objects.push( object );
      }

      scene.add(group);
    },
    generateFloor: function(){

      var loader = new THREE.TextureLoader();

      loader.load('../images/graph.jpg', function ( texture ) {
        texture.wrapS = THREE.RepeatWrapping; 
        texture.wrapT = THREE.RepeatWrapping;

        texture.repeat.set( 25, 25 ); 

        var material = new THREE.MeshLambertMaterial({ map : texture });
        var geometry = new THREE.PlaneGeometry(cubeSize, cubeSize, 8, 8);
        var plane = new THREE.Mesh( geometry, material );

        plane.rotateX( - Math.PI / 2);
        plane.position.y = floorPositionY;
        scene.add( plane );
      });
    },
    animate: function(){
        camera.updateProjectionMatrix();
        frame = requestAnimationFrame( this.animate );
        this.render();
        TWEEN.update();
        this.rotateBlocks();      
    },
    rotateBlocks: function(){
      for (var i = this.objects.length - 1; i >= 0; i--) {
        this.objects[i].rotateX(0.0008);
        this.objects[i].rotateY(0.0008);
        this.objects[i].rotateZ(0.0008);
      }
      scene.children[0].rotateY(0.0004);
      scene.children[0].rotateX(0.0004);
      scene.children[0].rotateZ(-0.0004);
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

    },
    zoomCamera: function(amount){

      var animationTime = 200;
      var finalBlur;

      if(amount > 0){
        finalBlur = 0.003;
      } else {
        finalBlur = 0;
      }

      var zoom = {
        value: camera.position.z // from current zoom (no matter if it's more or less than 1)
      };
      var zoomEnd = {
        value: camera.position.z + amount // to the zoom of 1
      };
      var tween = new TWEEN.Tween(zoom).to(zoomEnd, animationTime); // duration of tweening is 0.5 second
      
      tween.onUpdate(function() {
        camera.position.z = zoom.value;
      });

      var blur = {
        value: vblur.material.uniforms.v.value
      };

      var blurEnd = {
        value: finalBlur
      };
      var blurTween = new TWEEN.Tween(blur).to(blurEnd, animationTime);

      blurTween.onUpdate(function(){
        vblur.material.uniforms.v.value = blur.value;
        hblur.material.uniforms.h.value = blur.value;
      });

      tween.start();
      blurTween.start();
    }
  },
  mounted: function(){

    var currentPath = router.history.current.path;

    if(!Detector.webgl){
      console.log("Unable to initialize WebGL. Your browser or machine may not support it.");
      this.threeDisplayClass = 'noWebGL';
      this.showWebGLNotice = true;
      return;
    }

    this.initScene();

    if(currentPath === '/'){
      this.threeDisplayClass = null;
      this.animate();
      this.glitchEffect(300);
    } else {
      this.threeDisplayClass = 'hide-3d';
    }

  },
  router: router
});

