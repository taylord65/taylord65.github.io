Vue.component('desktop', {
  props: ['src'],
  template: '\
      <video class="desktop-video" width="100%" height="auto" autoplay loop muted playsinline>\
      <source :src="src" type="video/mp4">\
      </video>\
      '
});