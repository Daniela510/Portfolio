$('.zoomed a').on({
    mouseenter: function(e){
        e.preventDefault();

        var filename = $(this).attr('href');
        var $this = $(this);
        $('body img.extra').remove();
        $('body').append(

            $('<img>').addClass('extra').attr({
                src: 'images/'+filename
            }).css({
                top: $this.offset().top + 40,
                left: $this.offset().left
            })
        );
    },
    mouseleave: function(e){
        e.preventDefault();
        $('body img.extra').remove();
    }
})