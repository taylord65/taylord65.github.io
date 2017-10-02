Vue.component('desktop', {
  props: ['src'],
  template: '\
	<div class="desktop-video">\
		<img src="https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/macbook2X_noLabel.jpg">\
		<div class="video-container">\
			<video width="100%" height="auto" autoplay loop muted playsinline>\
				<source :src="src" type="video/mp4">\
			</video>\
		</div>\
	</div>\
	'
});