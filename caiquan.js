var jiandao = document.getElementById('jiandao');

function jiandaoFun() {
	var my_result = document.getElementById('my_result');
	my_result.src = "imgs/jiandao.png";

	var computer_result = document.getElementById('computer_result');
	var random = Math.random;
	if(random < 0.33){
		computer_result.src="imgs/jiandao.png";
		computer_result.innerHTML="tie";
	}else if(random < 0.67){
		computer_result.src="imgs/shitou.png";
		computer_result.innerHTML="lose";
	}else{
		computer_result.src="imgs/bu.png";
		computer_result.innerHTML="win";
	}
}
jiandao.onclick=jiandaoFun;
