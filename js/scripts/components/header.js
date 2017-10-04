Vue.component('header-menu', {
  data: function(){
    return {
      showFill: false,
      route: undefined
    }
  },
  props: ['showMenu'],
  template: '\
    <div>\
      <header>\
        <div class="home-icon" v-on:click="home">\
          <svg version="1.1" x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">\
          <rect fill="#A01212" width="50" height="50"/> <g> <path fill="#FFFFFF" d="M20,41.7V17.1h-9V8.3H39v8.8h-8.9v24.6H20z"/> </g> <circle fill="#FFFFFF" cx="37" cy="40.3" r="1.8"/> </svg>\
        </div>\
      </header>\
      <transition name="headerFade">\
        <div v-if="showFill" class="rect-fill">\
          <h1>{{ route }}</h1>\
        </div>\
      </transition>\
    </div>\
  ',
  created: function(){
    this.route = this.$route.name;
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function(){
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    home: function(){
      this.showFill = false;
      this.$emit('homeaction');
    },
    handleScroll: function(event){
      if(router.history.current.path !== '/'){
        var headerHeight = $("header").outerHeight();
        var scrollUpSectionPosition;

        if($(".scrollUpSection").offset()){
          scrollUpSectionPosition = $(".scrollUpSection").offset().top - headerHeight;
        }

        if($(window).scrollTop() > scrollUpSectionPosition){
          if(!this.showFill){
            this.showFill = true;
          }
        } else {
          if(this.showFill){
            this.showFill = false;
          }
        }
      }
    }
  },
  watch: {
    '$route': function(to, from){
      this.route = to.name;
      if(this.route === 'home'){
        this.showFill = false;
      }
    }
  }
});

