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