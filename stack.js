var arrayL = [ "(", "(","(", ")", ")"]
var arrayR = [ ")", ")", ")", "(", "("]
var arrayT = [ "(", ")", "(", ")"]


function stackHug(array) {
//make a Stack
var stack = [];

//Total the incoming array
var total = array.length

//Put stuff into the stack
for(var i = 0; i < total; i++ ){
		var currentElement = array.shift();
		if (currentElement === "(") {
			stack.unshift(currentElement);
			console.log(stack);
			}
		else if (currentElement === ")" && stack.length === 0){
				return "right wins";
			}
			else {
				stack.shift();
			}
		}
	if (stack.length === 0){
		console.log("tie");
		return "it's a tie";
	}else {
		console.log("left wins");
		return "left wins";	
}
}
