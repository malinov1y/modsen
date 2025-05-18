// //Task1
// function hoistingTest() {
//     console.log(x); //undefined
//     console.log(y); // ReferenceError: Cannot access 'y' before initialization
//     var x = 5;
//     let y = 10;
//     console.log(x); // 5
//     console.log(y); // 10
// }

// hoistingTest();



// //Task2
// const a = 1;

// if (true) {
// 	var b = 2;
// }

// console.log(a + b); // 3



// //Task3
// console.log(a); // undefined

// if (true) {
// 	var a = 5;
// }

// console.log(a); // 5



// //Task4
// var str1 = "Привет,";
// var str2 = "Илья";
// console.log(str1 + " " + str2);
// console.log(`${str1} ${str2}`);



// //Task5
// let a = 1;
// console.log(`"Значение переменной a - " ${a}`);



// //Task6
// const num1 = 10;
// const num2 = 5;
// console.log(`Сумма: ${num1 + num2}`);
// console.log(`Разность: ${num1 - num2}`);
// console.log(`Произведение: ${num1 * num2}`);
// console.log(`Частное: ${num1 / num2}`);



// //Task7
// let a = 5;

// if (true) {
// 	a = 10;
// }

// function foo() {
// 	console.log(a); // 10
// }

// foo()



// //Task8
// if (true) {
// 	var a;
// }

// function foo() {
// 	console.log(a); // undefined
// }

// foo()

// a = 10;



// //Task9
// function foo() {
// 	var a = 10;
// }

// if (true) {
// 	var b = 10;
// }

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // 10