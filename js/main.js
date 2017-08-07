// var name = prompt('what is your first name?');
// var lastName = prompt('what is your last name?');
// var age = prompt('what is your age?')

// alert('your full name is ' + name + ' ' + lastName);
// console.log('your age is ' + age)v

// var age = prompt('How hold are you?')
// // the .25 is counting the leap years
// var days = age * 365.25
// alert('your rougly this ' + days + ' in days')

// var age = prompt('how old are you?')

// if (age < 0) {
// 	console.log('Error your not alive yet.')
// }
// else if (age == 21) {
// 	console.log('Happy Birthday!')
// }
// else if (age == (age % 3 )) {
// 	console.log('odd number!')
// }
// else if (age == (age % 4)) {
// 	console.log('this is a perfect square!')
// }
// else {
// 	console.log('Error')
// }

//GUESSING GAME
// var secret = 15
// // var num = prompt('guess a number!');
// var guess = prompt('guess a number!');
// var guess = Number(guess)

// if (guess === secret) {
// 	alert('YOU GOT IT')
// }else if (guess > secret) {
// 	alert('your guess is too high! try again!')

// }else
// 	alert('to low!')
// 	}
//WHILE LOOP EXCERCISES
//  var num = -10;

// while(num < 20){
// 	console.log(num);
// 	num++;
// }

// var numTwo = 10
// while(numTwo <= 41){;
// 	console.log(numTwo);
// 	numTwo+=2;
// }

// var num = 300
// while(num <= 333){
// 	console.log(num);
// 	num+=3
// }

// var num = 5

// while(num <= 50){
// 	if (num % 3 === 0 && num % 5 === 0) {
// 		console.log(num)
// }
// 		num+=1
// 	} 


// var answer = prompt('are we there yet?');


// while(answer !== "yes" && answer !== 'yeah'){
// 	var answer = prompt('are we there yet?')
// }
// alert('we made it!');
// if (answer === "yes") {
// 	alert('yay we made it!')
// } else {
// 	var answer = prompt('are we there yet?')
// }


//VERSION TWO

// var answer = prompt('are we there yet?');


// while(answer.indexOf('yes') === -1){
// 	var answer = prompt('are we there yet?')
// }
// alert('we made it!');

// for (var i = -10; i < 20; i++) {
// 	console.log(i)
// }
// console.log('excercise 2')

// for (var i = 10; i < 40; i+=2) {
// 	console.log(i)
// }

// console.log('excercise 3')

// for (var i = 300; i < 333; i+=3) {
// 	console.log(i)
// }
// console.log('excercise 4')

// for (var i = 0; i < 50; i++) {
// 	if (i % 3 === 0 && i % 5 === 0) {
// 		console.log(i)
// }}
// FUNCTIONS===============


// function isEven(input) {
// 	if (input % 2  ) {
// 	return	console.log('its not even')
// 	} else {
// 	return	console.log('its even')
// 	}

// }
// function factorial (n){
//   if (n==0 || n==1){
//     return 1;
//   }
//   return factorial(n-1)*n;
// } 
// function kebabToSnake(inputTwo){
// 	var inputTwo = inputTwo.replace(/-/g, "_")
// 	return console.log(inputTwo)
// }

//====================scope 

var x = 12

function bigOne(argument) {
	// body...
var x = 12	
		var y = function smallOne{
			x * 4
			console.log(x)
		}

		var z function smallTwo{
			x - 10
			console.log(x)
		}

		console.log(x+y) 

}















































