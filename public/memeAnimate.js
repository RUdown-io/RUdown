
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

$(window).on("load", function() {

	var x = 0;
	var meme_x       = 50;
    var meme_y       = 10;
    var meme_reverse = 0;
    var meme_mirror  = "1";
	(function animBack() {
        timer = setTimeout(function() {
                x = x+2;
                $('.fund-status-bar').css({'background-position': x+'px'+' 0px'});
                animBack();
        }, 50);
    })();
    var timerDelay = 2500;
    (function animMeme() {
        timer = setTimeout(function() {
        		var footerWidth = $('footer').width();
                
                if(meme_y == 10){
                	meme_x = randomIntFromInterval(50, (footerWidth-100));
                	rndInt = randomIntFromInterval(1, 2);
        			if(rndInt == 1){
        				meme_mirror = "1";
        			}else{
        				meme_mirror = "-1"
        			}

                }
                if(meme_y == -60){
        			meme_y = 10;
        			timerDelay = 5000;
        		}else{
        			meme_y = -60;
        			timerDelay = 2500;
        		}
                $('.rudown-meme').css({'top':meme_y+'px', 'right': meme_x+'px', 'transform': 'scale('+meme_mirror+', 1)'});
                animMeme();
        }, timerDelay);
    })();

});