function winOpen() {
	window.open("win.html", "win", "width=400, height=400, top=100, left=100");
}

function modalOpen() {
	$("#modal_bg").show(0);
	$("#modal_wrap").css({"display":"table"}).show(0);
}

function modalClose() {
	$("#modal_bg").hide(0);
	$("#modal_wrap").hide(0);
}
