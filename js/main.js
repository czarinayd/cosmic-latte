$(window).scroll(function() {
    
   if (isScrolledIntoView($('.bottom'))) {
       $('#sat-spacer').show(1000);
   } else {
       $('#sat-spacer').hide(1000);
   }

});

function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}