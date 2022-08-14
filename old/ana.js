var damnItsTheBody = document.body;
var totalHeight = window.innerHeight;
var theWidth = 1524; // Pixels, fuck!
var theFrames = 4;
var thatWidth = theWidth / theFrames
var totalHeight = window.innerHeight;

var hand = document.querySelector( '.hand' );

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
