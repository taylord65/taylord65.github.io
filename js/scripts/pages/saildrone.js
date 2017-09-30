const Saildrone = {
  props: ['menuOpen'], 
  template: '#saildrone',
  data: function(){
    return {
      src: "https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/3boats.jpg"
    }
  },
  created: function(){

    $('<img/>').attr('src', this.src).on('load', function() {
       $(this).remove();
       $('#sd_background').css('background-image', 'url(' + this.src + ')');
    });
  }
};