$(function(){
	$("#hamburger").click(function(){
		//$("header nav >ul").stop().animate({"display":"block"},500)
		//$("header nav >ul").css("display","block");
		$("header nav >ul").stop().slideToggle();
	})
	$(".subtitle").click(function(){
		$("header nav .subul").stop().slideToggle();
	})
})