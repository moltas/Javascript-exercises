
var numbers = [];
var calc = []
var result = 0;
var operators;

var add = function(n1, n2) {
	return n1 + n2;
	console.log("hej");
}

var multiply = function(n1, n2){
	return n1 * n2;
}

var divide = function(n1, n2){
	if (n2 === 0){
		return NaN;
	}
	return n1 / n2;
}

var subtract = function(n1, n2){
	return n1 - n2;
}


var getNumber = function(){

	if (numbers.length > 0){
		var n = parseFloat(numbers.join(""));
		calc.push(n);
		numbers=[];
	}

}

var pressButton = function(){
	var text= $(this).text();
	numbers.push(text);
}

var symPress = function(){
	getNum();
	var text = $(this).text();
	calc.push(text);
}

var equals = function(){
	getNum();

	switch (calc[1]){
		case "+":
			result = add(calc[0], calc[2]);
			break;
		case "-":
			result = subtract(calc[0], calc[2]);
			break;
		case "/":
			result = divide(calc[0], calc[2]);
			break;
		case "*":
			result = multiply(calc[0], calc[2]);
			break;
	}

	var output = (calc[0] + " " + calc[1] + " " + calc[2] + " " + "=" + " " + result);
	var answer = document.getElementById("answer");
	answer.style.visibility = "visible";
	answer.innerHTML = output;
	clear();
}

var clear = function(){
	numbers = [];
	calc = [];
	result = 0;
}

$(".number").click(pressButton);
$(".operator").click(symPress);
$("operator equals").click(equals);
$("operator clear").click(clear);