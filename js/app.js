// Document-Ready Functions
document.addEventListener("DOMContentLoaded", function(event) {
	
	var fizzPrompt = prompt("How far do you want to take this thing?", "Enter");
	fizzPrompt = parseInt(fizzPrompt, 10);

	var node = document.getElementById('fizzlist');

	for ( var fizzCount = 1; fizzCount <= fizzPrompt; fizzCount++ ) {
		if ( fizzCount % 3 == 0 && fizzCount % 5 == 0) {
			node.innerHTML = node.innerHTML + '<li>FizzBuzz!</li>';
			// console.log('fizzbuzz');
		} else if ( fizzCount % 3 == 0 ) {
			node.innerHTML = node.innerHTML + '<li>Fizz!</li>';
			// console.log('fizz');
		} else if ( fizzCount % 5 == 0 ) {
			node.innerHTML = node.innerHTML + '<li>Buzz!</li>';
			// console.log('buzz');
		} else {
			node.innerHTML = node.innerHTML + '<li>' + fizzCount + '</li>';
			// console.log(fizzCount);
		};
	};

});