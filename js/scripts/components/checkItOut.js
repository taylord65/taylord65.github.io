Vue.component('check-it-out', {
  props: ['linkoptions'],
  data: function(){
    return {
      viewOptions: false,
      options: this.linkoptions
    }
  },
  methods: {
    showViewOptions: function(){
      if(this.options.length > 1){
        this.viewOptions = !this.viewOptions;
      } else {
        //route to this.options[0].url
      }
    }
  },
  template: '\
    <div class="checkItOutButton" v-on:click="showViewOptions" :class="[{viewOptionsOpen: viewOptions}]">\
      <span v-if="!viewOptions">Check it out</span>\
      <span v-if="viewOptions" class="link-option" v-for="option in options" :key="option.id">\
        {{option.title}}\
      </span>\
    </div>\
  '
});