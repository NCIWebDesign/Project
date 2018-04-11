
$(function(){
	
	$(".quote").on({
		mouseenter: function(){
			$(this).css("background-color", "#B2E1ED");
		},
		mouseleave: function(){
			$(this).css("background-color", "white"); 
		}
	});
	
	//initially hide second h1
	$(".flex-container1").hide();

	function show_second(){
		$(".flex-container").hide();
		$(".flex-container1").show();
		setTimeout(show_first,5000);
	}   

	function show_first(){
		$(".flex-container").show();
		$(".flex-container1").hide();
		setTimeout(show_second,2500);
	}

	setTimeout(show_second,5000);
});