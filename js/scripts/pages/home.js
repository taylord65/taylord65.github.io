const Home = {
  props: ['menuOpen'], 
  template: '\
    <div class="headline-container">\
      <transition name="fade">\
      <div v-if="!menuOpen" class="headline">\
        <h1>Taylor Dotsikas</h1>\
        <h2>UI Designer</h2>\
        <h2>Front end Developer</h2>\
      </div>\
      </transition>\
    </div>\
    '
};