var n = 0;
(function ani() {
	//{"left":-(n*1000)+"px"}
	$(".banner > ul").delay(2000).animate({"left":"-=1000px"}, 500, function(){
		n++;
		if(n == 5) {
			n = 0;
			$(this).css({"left":"0px"});
		}
		ani();
	});
})();

