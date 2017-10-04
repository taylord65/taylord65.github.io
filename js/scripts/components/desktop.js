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