var Saildrone = {
  props: ['menuOpen'], 
  template: '#saildrone',
  data: function(){
    return {
      portfolioFeature: 'portfolio-feature',
      src: "https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/sd/sd_cover.jpg"
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
       $('#sd_background').css('background-image', 'url(' + this.src + ')');
    });
  }
};