jQuery(document).ready(function(){
    jQuery('.tab-select').click(function(e){
        e.preventDefault();
        jQuery('.menu-item').parent().removeClass('current');
        jQuery(this).parent().addClass('current');
        jQuery('.right-side > div').fadeOut();
        jQuery(jQuery(this).attr('href')).fadeIn();
    });

    jQuery('.burger, .close').click(function(e){
        e.preventDefault();
        jQuery('body').toggleClass('menu-open');
    });

    jQuery('.image').draggable({
        axis: "x",
        containment: '.slider',
        start: function(event) {
            jQuery('body').removeClass('right-selected left-selected');
        },
        stop: function(event) {
            if(parseInt(event.target.style.left.replace('px', '')) > 0)
                jQuery('body').removeClass('left-selected').addClass('right-selected');
            else
                jQuery('body').removeClass('right-selected').addClass('left-selected');
        },
        drag: function(event) {
            if(parseInt(event.target.style.left.replace('px', '')) > 0)
                jQuery('body').removeClass('left-hover').addClass('right-hover');
            else
                jQuery('body').removeClass('right-hover').addClass('left-hover');

        }
    });

    jQuery('.__left-choice').on({
        click: function(){
            jQuery('body').removeClass('right-selected').addClass('left-selected');
        },
        mouseenter: function(){
            jQuery('body').removeClass('right-hover').addClass('left-hover');
        },
        mouseleave: function(){
            jQuery('body').removeClass('left-hover');
        }
    });

    jQuery('.__right-choice').on({
        click: function () {
            jQuery('body').removeClass('left-selected').addClass('right-selected');
        },
        mouseenter: function(){
            jQuery('body').removeClass('left-hover').addClass('right-hover');
        },
        mouseleave: function(){
            jQuery('body').removeClass('right-hover');
        }
    });
});