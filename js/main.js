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

//====================ARRAYS

 
// var colors = ['green','blue','red','black']
// colors.forEach (function(color){
// console.log(colors)
// })
// //push will add the 'pushed' item at the end
// colors.push('indigo')
// console.log(colors)
// //pop removes the last element in the array
// colors.pop()
// console.log(colors)
// //shift and unshift are almost the same but do it in the front of the array
// var meow = ['cat','dog', 'turtle']
// console.log(meow)
// meow.unshift('rat')
// console.log(meow)
// meow.shift()
// console.log(meow)
// meow.indexOf('turtle')

//todo list using prompt, console.log and alert
// var todolist = ['hi']

// var todos = ["Buy new turtle"]

// var input = prompt('What would you like todo today?');



//  while(input !== 'quit'){

// //handle input
// 	if (input === 'list'){
// 		listTodos();
	
// 	}else if(input === 'new'){
// 		addTodo() 
	
// 	}else if (input === "delete"){
// 		deleteTodo( )
// 	}
// 	//ask again for new input
// 	input = prompt('what would you like todo?');
// }
// console.log('okay you quit the app');


// function listTodos(){
// 	console.log("************")
// 			todos.forEach(function(todo, i){ 
// 				console.log(i + ": " + todo);
// 	});
// 	console.log("************")
// }
// function addTodo(){
// 	//ask for new todo
// 	var newTodo = prompt('enter a todo')
// 	// add to todos array
// 	todos.push(newTodo);
// 	console.log("added todo")

// }
// function deleteTodo(){
// 			//ask for index of todo to be deleted
// 		var index = prompt("Enter index of todo to delete")
// 		// delete that todo
// 		//splice()
// 		todos.splice(index, 1)
// 		console.log("deleted Todo")
// 	}














// var num = [1,2,3,4,5,6,7,8,9,10]
// var colors = ['red', 'blue', 'black', 'green']
// function color(){
// for (var i = 0; i < num.length; i++) {

// 	if (num% 3 === 0) {
// 		console.log(num)
// 	}else{
// 		console.log(num)
// 	}
// }
// }


//+++++++=======++++++++++++++++++++++

// printReverse([1,2,3,4])
// console.log()


// function printReverse(arr){
// 	for (var i = arr.length - 1; i >= 0; i--) {
// 		console.log(arr[i])
// 	}
// }

// printReverse([5,3,856,3])

// function isUniform(arr){
// 	var first = arr[0]
// 	for (var i = 1; i < arr.length; i++) {
// 		if (arr[i] !==first) {
// 			return false;

// 		}
// 	}
// 	return true
// }
// console.log(isUniform([1,1,1,1]))
// // isUniform([2,2,2,1])

// function sumArray(arr){
// 	var total = 0
// 	arr.forEach(function(element){
// 		total += element;
// 	})
// 	return total;
// }

// function max(arr){
// 	var max = arr[0];
// 	for(var i = 1 ; i < arr.length; i++){
// 	 	if(arr[i] > max){
// 	 		max = arr[i];
// 	 	}
// 	 }
// 	 	return max
// }

// var nums = [45,65,77,34]
// nums.forEach(function(num){
// 	console.log(num);
// });

// function myForEach(arr, func){
// 	//loop through array
// 	for(var i = 0; i < arr.length; i++){
// 		//call func for each item in the array
// 		func(arr[i ])
// 	}
// }

// var colors = ["red", "orange", "yellow"];

// myForEach(colors, function(){})


//+++++++++========OBJECTS==================== 

// var cat = {
// 	name: "meeps",
// 	breed: "cute",
// 	age: 3
// }
// console.log(cat.breed)


//+++++++++========OBJECTS EXCERCISE==================== 

// var someObject = {};
// //it is valid but bad practice to certain extent
// someObject._name = "Hedwig";

// someObject.age = 6;


// var prop = "color";

// someObject[prop] = "red";

// // someObject.123 = true;

// var someObject = {
// 	friends:[
// 		{name: "Malfoy"},
// 		{name: "Crabbe"},
// 		{name: "Goyle"}
// 	],
// 	color: "baby blue",
// 	isEvil: true
// }
// console.log(someObject.friends[0])


// MOVIE DATABASE ARRAY


// var movies = [
// {
// 	title: "In Bruges",
// 	rating: 5,
// 	hasWatched: true
// },
// {
// 	title: "Frozen",
// 	rating: 4.5,
// 	hasWatched: false
// },
// {
// 	title: "Mad Max Fury Road",
// 	rating: 5,
// 	hasWatched: true
// },
// {
// 	title: "Les Miserables",
// 	rating: 5,
// 	hasWatched: true
// }
// ]
// movies.forEach(function(movies){
// 	console.log(buildString(movies))
// })

// function buildString(movies){
// 	var results = "You have "
// 	if (movies.hasWatched) {
// 		results += "watched ";
// 	}else{
// 		results += "not seen "
// 	}
// 	results += "\"" + movies.title + "\" - ";
// 	results += movies.rating + " stars";
// 	return results

// }

// THE DOM 
// Document Object Model
// document object model is the interface between your javascript and HTML+CSS

// var h1 = document.querySelector("h1");

// h1.style.color = "pink";

// var body = document.querySelector('body');
// var isBlue = false

// setInterval(function(){
// 	if (isBlue) {
// 		body.style.background = "white"
// 	} else {
// 		body.style.background = "blue";
// 	}
// 		isBlue = !isBlue;

// }, 2000);

 // DOM excercise

// var one = document.getElementsByTagName('p')
// var two = document.querySelector('#first')
// var three = document.getElementsByClassName('special')[0]
// var four = document.getElementById('first')

// var button = document.querySelector('button')



// button.addEventListener('click', function(){
// 	document.body.classList.toggle("pink")
// });


//========================================================\\
//------------------SCORE KEEPING APP---------------------\\
//========================================================\\
// var p1Button = document.querySelector("#pOne")
// var p2Button = document.querySelector("#pTwo")
// var resetButton = document.querySelector("#reset")

// var p1Display =document.querySelector("#p1Display")
// var p2Display =document.querySelector("#p2Display")
// var numInput = document.querySelector('input')
// var winningScoreDisplay = document.querySelector('p span')
// var p1Score = 0;
// var p2Score = 0;

// var gameOver = false;
// var winningScore = 5;




// p1Button.addEventListener("click", function(){
// 	if(!gameOver){
// 	p1Score++;
// 		if (p1Score === winningScore) {
// 			gameOver = true
// 			p1Display.classList.add('winner')
// 		}
// 	p1Display.textContent = p1Score
// 	}
// })
// p2Button.addEventListener('click', function(){
// 	if(!gameOver){
// 	p2Score++
// 		if (p2Score === winningScore) {
// 			gameOver = true
// 			p2Display.classList.add('winner')
// 		}
// 	p2Display.textContent = p2Score
// 	}
// })

// resetButton.addEventListener('click', function(){
// 	reset()
// })
// //reset function
// function reset(){
// 	p1Score = 0;
// 	p2Score = 0;
// 	p1Display.textContent = p1Score
// 	p2Display.textContent = p2Score
// 	p1Display.classList.remove('winner')
// 	p2Display.classList.remove('winner')
// 	gameOver = false
// }
// //change event works when ever the variable/element changes
// numInput.addEventListener('change', function(){
// 	winningScoreDisplay.textContent = numInput.value
// 	//this turns the string to a number output
// 	winningScore = Number(numInput.value)
// 	reset();
// })
//========================================================\\
//------------------SCORE KEEPING APP---------------------\\
//========================================================\\


// var lis = document.querySelectorAll('li')

// for(var i = 0; i <lis.length; i++){
// 	lis[i].addEventListener('mouseover', function(){
// 		this.classList.add('selected')
// 	});
// 	lis[i].addEventListener('mouseout', function(){
// 		this.classList.remove('selected')
// 	})
// 	lis[i].addEventListener('click', function(){
// 		this.classList.toggle('done')

// 	})
// }

//========================================================\\
//------------------jQuery Starts Here--------------------\\
//========================================================\\


// $("div").css("background", "purple")

// $(".highlight").css('width', '200px')

// $("#third").css('border', '2px solid orange')

// $('div:first-of-type').css('color', 'pink')
 

// var arr = [1,2,6443,234,52,768,7]
// 	// arr.reverse()
// 	// 	console.log(arr)
// 	// arr.sort()
// 	// arr.push('meow')
// 	arr.shift()
// 			console.log(arr)

// var crab = {
// 	name: 'Crustacean',
// 	seats: 150,
// 	food: 'crab'
// }

// var taco = {
// 	name: "taco Bell",
// 	seats: 75,
// 	food: 'tacos'
// }

// var pizza = {
// 	name: "round table pizza",
// 	seats: 50,
// 	food: pizza
// }

// function Restaurants(name, seats, booked, food){
// 	this.name = name
// 	this.seats = seats
// 	this.booked = booked
// 	this.food = food
// 	this.avaliableSeats = function(){
// 		return(this.seats - this.booked)
// 	}
// }

// var mcDonalds = new Restaurants('McDonalds', 50, 5, 'burger and fries')
// var burgerKing = new Restaurants('Burger King', 50, 55, 'better burgers and not so better fries')
// var harrisRanch = new Restaurants('Harris Ranch', 150, 145, 'Steak')
// console.log(mcDonalds.avaliableSeats())

// $('input').val()


