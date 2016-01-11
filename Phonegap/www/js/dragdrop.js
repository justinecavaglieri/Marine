jQuery(document).ready(function () {
    var draggable = jQuery(".drag");                        // getting all divs with drag class name
    var draggableNumber = draggable.length;                 // getting div numbers with drag class name 
    //console.log(draggableNumber);

// -- binding methods mousedown and mousemove
    jQuery(draggable).bind('mousedown', function (e) {
        jQuery(draggable).bind('mousemove', function (e) {

            var relX = e.pageX; // mouse position X axis
            var relY = e.pageY; // mouse position Y axis
            //console.log(relX , relY);   
            
            // -- top and left offset value of the current div
            var getTop = jQuery(this).offset().top; 
            var getleft = jQuery(this).offset().left;
            
            // -- width and height of active div
            var getwidth = jQuery(this).width();
            var getheight = jQuery(this).height();

            // setting new margins for the active div
            var newMarginTop = getheight / 2;
            var newMarginLeft = getwidth / 2;

            //console.log(getTop);
            jQuery(this).css({position: 'absolute', top: relY, left: relX, marginTop: -newMarginTop, marginLeft: -newMarginLeft, zIndex: draggableNumber});

        });
    });
// -- unbinding the events and removing zIndex    
    jQuery(draggable).bind('mouseup', function () {
        jQuery(draggable).unbind('mousemove');
        jQuery(this).css({zIndex: '0'});
    });
});