var Fifthlight = {
  props: ['menuOpen'], 
  template: '#fifthlight',
  data: function(){
    return {
      portfolioFeature: 'portfolio-feature',
      src: "https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/fl/fl_cover_dark.jpg"
    }
  },
  methods: {
    closemenu: function(menuOpen){
      if(menuOpen){
        //emit close menu
        this.$emit('menuaction');
      }
    }
  },
  created: function(){

    $('<img/>').attr('src', this.src).on('load', function() {
       $(this).remove();
       $('#fl_background').css('background-image', 'url(' + this.src + ')');
    });
  }
};