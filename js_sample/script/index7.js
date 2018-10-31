var n = 0;

$("#bt_next").click(function(){
	if(n < 4) n++;
	ani();
});

$("#bt_prev").click(function(){
	if(n > 0) n--;
	ani();
});

function ani() {
	$(".banner > ul").stop().animate({"left":(-n*1000)+"px"}, 500);
}

