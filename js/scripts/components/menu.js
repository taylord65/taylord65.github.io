Vue.component('nav-menu', {
  props: ['showMenu'],
  template: '\
    <div>\
    <transition name="slide">\
      <div v-if="showMenu" class="menu">\
        <div class="menu-header">\
          <h1>Work</h1>\
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
              <h1><div class="indicator"></div>Fifthlight</h1>\
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
        </div>\
        <div class="menu-footer">\
          <span>Get in touch</span>\
          <input type="text" onClick="this.setSelectionRange(0, this.value.length)" value="taylordotsikas@gmail.com">\
        </div>\
      </div>\
    </transition>\
    \
    <div class="menu-button-container" v-on:click="menuTrigger">\
      <div id="menuIcon"  v-bind:class="[{open: showMenu}]">\
        <span></span>\
        <span></span>\
        <span></span>\
      </div>\
      <span id="workLabel" v-if="!showMenu">WORK</span>\
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