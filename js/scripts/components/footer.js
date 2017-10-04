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