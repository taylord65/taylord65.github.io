var navLinks = $('.navLink');
var contentElements = $('.content');

//Navigation
navLinks.on('click', function(e) {


    //set menu    
    navLinks.removeClass('selected');

    $(e.currentTarget).addClass('selected');
    var navId = $(e.currentTarget).attr('id');

    //set content
    contentElements.hide();
    switch (navId) {
        case "menu1":
            $('#one').show();
            break;
        case "menu2":
            $('#two').show();
            break;
        case "menu3":
            $('#three').show();
            break;
    }
});