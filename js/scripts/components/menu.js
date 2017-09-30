Vue.component('nav-menu', {
  props: ['showMenu'],
  template: '\
    <div>\
    <transition name="slide">\
      <div v-if="showMenu" class="menu">\
        <h1>Featured Work</h1>\
        <div v-on:click="routeTo($event, soccerRoute )" class="feature">\
          <h2>Soccer-1</h2>\
        </div>\
        <div v-on:click="routeTo($event, sailDroneRoute )" class="feature">\
          <h2>Saildrone</h2>\
        </div>\
        <div class="feature">\
          <h2>Fifthlight</h2>\
        </div>\
        <div class="feature">\
          <h2>teaBot</h2>\
        </div>\
        <div class="feature">\
          <h2>Art</h2>\
        </div>\
        <h1>taylordotsikas@gmail.com</h1>\
      </div>\
    </transition>\
    \
    <div id="menuIcon" v-on:click="menuTrigger" v-bind:class="[{open: showMenu}]">\
      <span></span>\
      <span></span>\
      <span></span>\
    </div>\
    \
    </div>\
  ',
  data: function() {
    return {
      soccerRoute: 'soccer1',
      sailDroneRoute: 'saildrone',
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