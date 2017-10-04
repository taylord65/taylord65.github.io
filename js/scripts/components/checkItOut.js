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
      if(!this.viewOptions){
        if(this.options.length > 1){
          this.viewOptions = !this.viewOptions;
        } else {
          window.open(this.options[0].url);
        }
      }
    },
    navToLink: function(url){
      window.open(url);
    }
  },
  template: '\
    <div class="checkItOutButton" v-on:click="showViewOptions" :class="[{viewOptionsOpen: viewOptions}]">\
      <span v-if="!viewOptions">Check it out</span>\
      <span v-if="viewOptions" class="link-option" v-for="option in options" :key="option.id" v-on:click="navToLink(option.url)">\
        {{option.title}}\
        <svg viewBox="0 0 64 64" width="20px" height="20px"><path d="M59.927 31.985l.073.076-16.233 17.072-3.247-3.593L51.324 34H4v-4h47.394L40.52 18.407l3.247-3.494L60 31.946l-.073.039z"></path></svg>\
      </span>\
    </div>\
  '
});