var depth = 100;
var n = 0;
function ani() {
	$(".banner li").eq(n).fadeOut(0).css({"z-index":depth++});
	$(".banner li").eq(n).delay(1000).fadeIn(500, function(){
		n++;
		if(n == 5) n = 0;
		ani();
	});
}
ani();