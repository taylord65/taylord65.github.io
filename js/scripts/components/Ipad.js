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