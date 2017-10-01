Vue.component('tabbed-content', {
  data: function(){
    return {
      activeTabId: 0,
      tabContentClass: 'tab-content-area',
      tabTitleClass: 'tab-title',
      tabs: this.tabdata
    }
  },
  props: ['tabdata'],
  methods: {
    setActive: function(tab){

      var self = this;

      tab.isActive = true;
      this.activeTabId = tab.id;

      this.tabs.forEach(function(tab){

          if(tab.id !== self.activeTabId){
            tab.isActive = false;
          }
      });
    }
  },
  template: '\
  <div class="tabbed-content">\
    <div class="title-row">\
      <div v-for="tab in tabs" :class="[{activeTitle:tab.isActive}, tabTitleClass]" v-on:click="setActive(tab)">\
        {{tab.title}}\
      </div>\
    </div>\
    \
    <transition name="fade" mode="out-in">\
    <p v-if="tab.isActive" v-for="tab in tabs" :key="tab.id" :class="tabContentClass">\
      {{tab.text}}\
    </p>\
    </transition>\
  </div>\
  '
});