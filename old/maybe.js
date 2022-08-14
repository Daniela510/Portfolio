$(document).ready(function(){
  var damnItsTheBody = document.body;
  var totalHeight = window.innerHeight;
  var theWidth = 1524; // Pixels, fuck!
  var theFrames = 4;
  var thatWidth = theWidth / theFrames
  var totalHeight = window.innerHeight;
  var hand = document.getElementById( 'hand' );

  $('#hand').click(function () {
      if ($('#hand').data('state') === '0') {
  console.log('yeah');
          $(this).animate({
              'width': '381px',
                  'height': '97vh'
          }, 200);
          $('#hand').data('state', '1');
          // hand.style.backgroundImage = ("url(media/asprite.png)");
          // damnItsTheBody.img.style.display = ("none");
          function App() {

              this.init = function() {
                // Wait! What! Someone Should trottle this! What! No! Damn!
              window.onmousemove = function( event ) {
                var percentage = 1 - ( event.y / totalHeight );
                var segment = Math.floor( 4 * percentage );
                  hand.style.backgroundPosition = ((-segment * thatWidth) + 'px 0px');
                }
             }
          }

          var app = new App();
          app.init();
      } else {
  console.log('yeah');
          $(this).animate({
              'width': '31.5vw',
                  'height': '45vh'
          }, 200);
          $('#hand').data('state', '0');
          // hand.style.backgroundImage = ("media/a.png");
        // damnItsTheBody.img.style.display = ("inline");
      }
  });



});


$("#theid").click(function(){
  $(".projectDescription").toggleClass("hide");
  $(".projectDescription").toggleClass("active");
})
