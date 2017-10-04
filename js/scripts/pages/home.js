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