function winOpen() {
	//window.open(param1, param2, param3);
	//param1 -> 윈도우창에 나타낼 웹페이지
	//param2 -> 윈도우창의 이름
	//param3 -> 윈도우창의 옵션
	//param1만 주면 새창으로 링크 이동 window.open("win.html");
	//현재창 링크이동 location.href = "win.html";
	//location.href = "win.html";
	//window.open("win.html");
	window.open("win.html", "win", "width=400, height=400, top=100, left=100");
}

function modalOpen() {
	$("#modal_bg").show(0);
	$("#modal_wrap").css({"display":"table"});
}

function modalClose() {
	$("#modal_bg").hide(0);
	$("#modal_wrap").css({"display":"none"});
}
