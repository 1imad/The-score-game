var p1button = document.getElementById("p1");
var p1 = document.getElementById("p1s");
var p2button = document.getElementById("p2");
var p2 = document.getElementById("p2s");
var rbutton = document.getElementById("reset");
var scl = document.getElementById("scl");
var p1sc = 0;
var p2sc = 0;
var gameOver = false;
var winscore = 5;

p1button.addEventListener("click",function(){
	if (!gameOver){
		p1sc++;
		if (p1sc === winscore){
			alert("Game Over! Player Two Win");
			gameOver = true;
			p1.classList.add("winner");
		}
		p1.textContent = p1sc;
	
	}
})

p2button.addEventListener("click",function(){
	if (!gameOver){
		p2sc++;
		if(p2sc === winscore){
			alert("Game Over! Player Two Win");
			p2.classList.add("winner");
		}
		p2.textContent = p2sc;
	}
})

scl.addEventListener("change", function(){
	winscore = Number(scl.value);
	var sc = scl.value;
	scrl.textContent = sc;

})

rbutton.addEventListener("click",function(){
	gameOver=false;
	p1sc = 0;
	p2sc = 0;
	p1.textContent=(p1sc);
	p2.textContent=(p2sc);
	p2.classList.remove("winner");
	p1.classList.remove("winner");
})