// Hoisting practice/examples

// setName();
// function setName() {
// 	var name = 'Nick';
// 	console.log(name);
// }

// console.log('check script 1');
// let avg = findAvg(8, 6);
// console.log('check script 2', avg);
// function findAvg(a, b) {
// 	console.log('check script 3');
// 	var answer = (a + b) / 2;
// 	return answer;
// }

//Scoping Practice

// let fruits = ['apple', 'orange', 'banana'];
// // let favFruit;

// function printFruit() {
// 	console.log(fruits[0]);
// 	let favFruit = fruits[2];
// 	let leastFavFruit = fruits[1];
// 	function printFavFruit() {
// 		console.log(favFruit);
// 	}
// 	printFavFruit();
// }
// console.log(leastFavFruit);

// // function printFavFruit() {
// // 	console.log(favFruit);
// // }

// printFruit();

// sayHello();

// function sayHello() {
// 	let name = 'Nick';
// 	console.log('Hello, ' + name + '.');
// }

let alarm = function alertMe() {
	alert('Wake Up!!!');
};

alarm();
