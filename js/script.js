/* Author: Lisa Catalano 
*/
$(document).ready(function(){
	var viewportWidth = $(window).width();	
	if (viewportWidth > 600) { 
		$('li#wotype').hover(
		 function(){ $('#type').show(100)},
     function(){ $('#type').hide(100)}
		);
	}
		
	var tabs = $('div#player > div');  
	tabs.hide().filter(':first').show(); 
	$('ul#player_nav a').filter(':first').addClass('active'); 
	
	$('div.tabs > ul#player_nav a').click(function() {
		$('#player_nav a').removeClass('active');
		var currentTab = $(this).attr('href'); 
		$(this).addClass('active'); 
		tabs.hide(); 
		$(currentTab).show(); 
	
		return false; /* Don't jump to real anchor. We still want tabs to show */
	});  
		
 });
