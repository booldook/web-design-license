var n = 0;

$("#bt_next").click(function(){
	if(n < 4) n++;
	else n = 4;
	ani();
});

$("#bt_prev").click(function(){
	if(n > 0) n--;
	else n = 0;
	ani();
});

function ani() {
	$(".banner > ul").stop().animate({"left":(-n*1000)+"px"}, 500);
}

