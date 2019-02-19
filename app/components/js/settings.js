/*
 * Custom Settings File for Aqua
 */
 
// Cufon Custom Font
 
Cufon.replace('h1');
Cufon.replace('h2');
Cufon.replace('h3');
Cufon.replace('.bubble');

// jQuery Cycle Plugin

$('#slides').cycle({ 
    fx:     	'fade', 
	speed:		500,
    timeout: 	5000,
	pager:  '#featured-nav', /* navigation that controls the slider (do not edit) */
   	pagerAnchorBuilder: function(idx, slide) { return '#featured-nav li:eq(' + idx + ')'; }, /* DO NOT DELETE */
	before: onBefore
});
					
function onBefore(){
	
	var slide = $(this).attr('id');
	
	$('#featured-nav ul li').removeClass('activeSlide');
	
	$('#featured-nav ul li#' + slide).addClass('activeSlide');
	
}

