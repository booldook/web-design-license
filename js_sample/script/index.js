
$(".nav").hover(function(){
	$("ul", $(this)).stop().slideDown();
}, function(){
	$("ul", $(this)).stop().slideUp();
});

