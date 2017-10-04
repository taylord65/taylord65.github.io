var Teabot = {
  props: ['menuOpen'], 
  template: '#teabot',
  data: function(){
    return {
      portfolioFeature: 'portfolio-feature',
      src: "https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/tb/tb_new_cover.jpg"
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
       $('#tb_background').css('background-image', 'url(' + this.src + ')');
    });
  }
};