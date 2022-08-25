let filterProjects, cv, cvtoggle, allProjects;


  document.addEventListener("DOMContentLoaded", () => {  
	cv = document.querySelector('footer');
	const tempAllProjects = document.querySelectorAll('.zoomed');
	allProjects = Array.from(tempAllProjects);
	cvtoggle = () => {
		cv.classList.toggle('up');
		cv.classList.toggle('down');
	  } 
	
	filterProjects = (word)=>{
		allProjects.forEach(el => {
			el.classList.add('invisible');
			if(el.classList.contains(word)){
				el.classList.remove('invisible')
			}
		});
	  }
  });

// the jquery was done in 2019 under guidance with help of Hannes Bernard, teacher at KABK
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
// repostion the element with the current mouse position from the middle point
			if ($dragging) {
				$dragging.offset({
					top: e.pageY - el_h / 2,
					left: e.pageX - el_w / 2
				});
			}
		});
		$dragging = $('.draggable');

	}).on('mouseup', '.draggable', function(e) {
		$dragging = null;
		$(this).removeAttr('unselectable').removeClass('draggable');
		$(this).children().each(function(){
			$(this).removeAttr('unselectable').removeClass('draggable');
		});
	});

	// to randomize their positions on page
	$('.zoomed').each(function(){
		var x = Math.round(Math.random() * ($(window).width()- $(this).width()/2));
		var y = Math.round(Math.random() * ($(window).height() - $(this).height()/2));

		$(this).css({
			top: y+'px',
			left: x+'px'
		})
	});

// Enlarge on click
	$('.zoomed').on({
		click: function(e){

			$(this).toggleClass('large');
		}
	});
});

// Another hidden fact about me is that I hate spiders. I hate all bugs & that includes butterflies. But spiders are the worst...
//     .          .                   .           .          .       __   __ 
//     |          |      __   __      |           |          |      (o \Y/ o) 
//     |          |    ( s \o/ s )    |         / | \        |       \_>|<_/    ___   ___  
//   / | \        |     \_<>|<>_/     |       \_\(_)/_/      |        (/"\)    { x \o/ x } 
// \_\(_)/_/    / | \    {_/'\_}      |        _//o\\_     / | \                \_* | *_/
//  _//o\\_   \_\(_)/_/             / | \       /   \    \_\(_)/_/               (_/'\_) 
//   /   \     _//o\\_            \_\(_)/_/               _//o\\_   
//              /   \              _//o\\_                 /   \              
//                                  /   \ 
