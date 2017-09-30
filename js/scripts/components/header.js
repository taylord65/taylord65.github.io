Vue.component('header-menu', {
  props: ['showMenu'],
  template: '\
    <header v-header>\
      <div class="home-icon" v-on:click="home">\
        <svg version="1.1" x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">\
        <rect fill="#A01212" width="50" height="50"/> <g> <path fill="#FFFFFF" d="M20,41.7V17.1h-9V8.3H39v8.8h-8.9v24.6H20z"/> </g> <circle fill="#FFFFFF" cx="37" cy="40.3" r="1.8"/> </svg>\
      </div>\
    </header>\
  ',
  methods: {
    home: function(){
      this.$emit('homeaction');
    }
  },
  directives: {
    header: {
      positionReached(el) {
        if(router.history.current.path !== '/'){
          var headerHeight = $("#header").height();
          var scrollUpSectionPosition = $(".scrollUpSection").offset().top - headerHeight;
          var windowScroll = $(window).scrollTop();

          if(windowScroll > scrollUpSectionPosition){
            if(el.classList.length == 0){
              el.classList.add('darkHeader');
            }
          } else {
            if(el.classList.length > 0){
              el.classList.remove('darkHeader');
            }
          }
        }
      },
      inserted(el, binding) {
        el.$onScroll();
      },
      bind(el, binding) {
        el.$onScroll = function() {
          binding.def.positionReached(el);
        }
        document.addEventListener('scroll', el.$onScroll);
      }
    }
  }
});