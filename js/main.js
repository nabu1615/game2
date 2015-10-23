$(document).ready(function() {
    	setTimeout(function(){
            $('#stage001').animate({
                left: "-=100%",
                opacity: "0"
            },800)
            $('#stage002').animate({
                left: "-=100%",
                opacity: "1"
            },800)
        },800+2000)
    $('#playConceptos').click(function(){
    	$('#stage002').css({
    	// 	"transform": "scale(.5)",
  			// "transition": "transform 500ms"
    		// left: "-=100%",
    		// opacity: "0"
    	})
    	$('#stage002').animate({
    		left: "-=100%",
    		opacity: "0"
    	},800)
    	$('#stage003').animate({
    		left: "-=100%",
    		opacity: "1"
    	},800)
    	setTimeout(function(){
	    	$('#stage003').animate({
	    		left: "-=100%",
	    		opacity: "0"
	    	},800)
	    	$('#stage004').animate({
	    		left: "-=100%",
	    		opacity: "1"
	    	},800)
    	},800+2000)
    })
    $('#answerBtn').click(function(){
    	$('#stage04').css({
    	// 	"transform": "scale(.5)",
  			// "transition": "transform 500ms"
    	})
    	$('#stage04').animate({
    		left: "-=100%",
    		opacity: "0"
    	},800)
    	$('#stage05').animate({
    		left: "-=100%",
    		opacity: "1"
    	},800)
    })
});