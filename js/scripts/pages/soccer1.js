const Soccer1 = {
  props: ['menuOpen'],
  template: '#soccer1',
  data: function(){
    return {
      portfolioFeature: 'portfolio-feature',
      src: 'https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/s1_cover_faded.png'
    }
  },
  created: function(){

    $('<img/>').attr('src', this.src).on('load', function() {
       $(this).remove();
       $('#s1_background').css('background-image', 'url(' + this.src + ')');
    });
  }
};