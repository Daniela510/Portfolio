$(document).ready(function() {
	var $dragging = null;

	$('body').on('mousedown', '.zoomed', function(e) {

		$(".zoomed").on("click",function(){$(".zoomed").css('z-index',0);$(this).css('z-index',1);});


		$(this).attr('unselectable', 'on').addClass('draggable');
		$(this).children().each(function(){
			$(this).attr('unselectable', 'on').addClass('draggable');
		});

		var el_w = $('.draggable').outerWidth(),
			el_h = $('.draggable').outerHeight();

		$('body').on('mousemove', function(e) {

			if ($dragging) {
				var ox = e.pageX - $dragging.offset().left;
				var oy = e.pageY - $dragging.offset().top;


				$dragging.offset({
					top: e.pageY - el_h / 2,
					left: e.pageX - el_w / 2
				});
			}
		});
		$dragging = $(e.currentTarget);

	}).on('mouseup', '.draggable', function(e) {
		$dragging = null;
		$(this).removeAttr('unselectable').removeClass('draggable');
		$(this).children().each(function(){
			$(this).removeAttr('unselectable').removeClass('draggable');
		});
	});

	$('.zoomed').each(function(){
		var x = Math.round(Math.random() * ($(window).width()- $(this).width()/2));
		var y = Math.round(Math.random() * ($(window).height() - $(this).height()/2));

		$(this).css({
			top: y+'px',
			left: x+'px'
		})
	});

	$('.zoomed').on({
		click: function(e){

			$(this).toggleClass('large');
		}
	});

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
});
