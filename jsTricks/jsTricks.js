// const p = { k: 1, l: 2 };
// const q = { k: 1, l: 2 };
// let isEqual = p==q;
// let isStartEqual = p=== q;
// console.log(isEqual, isStartEqual)

// // In JavaScript, when you compare objects using == or === , you're
// // comparing their references in memory, not their actual contents. Even if
// // two objects have the same properties and values, they are considered
// // unequal unless they reference the exact same object in memory

// isEqual = JSON.stringify(p) === JSON.stringify(q)
// console.log(isEqual)

// QUESTION - 2
// let x=10;
// function foo(){
//    let x = 5;
//     console.log(x)
// }
// foo();
// console.log(x)

//QUESTION - 3

// console.log("Start");
// setTimeout(() => {
//  console.log("Timeout");
// });
// const myFun = () => {
//     return 'callback'
// }
// Promise.resolve(myFun()).then((res) => console.log("Promise", res));
// console.log("End");

// QUESTION-4

// getData1()
// function getData1(){
//  console.log("getData11")
// }
// var getData = () => {
//  console.log("Hello")
// }
// getData();


// QUESTION - 5

// let a = true; // Step 1: Initialize variable 'a' to true

// // Function that returns a promise that resolves after a specified delay
// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// // Function to simulate the behavior
// const run = async () => {
//   console.log('Starting...');

//   // Start the delay in a separate promise
//   delay(2000).then(() => {
//     a = false; // Change 'a' to false after 2 seconds
//     console.log('a is now false');
//   });

//   // Using a loop with a small timeout to avoid blocking the main thread
//   while (a) {
//     console.log(' -- inside whilee -- ');
//     await delay(100); // Small delay to prevent blocking
//   }

//   console.log('Exited the while loop.');
// };

// // Call the run function to execute
// run();


// let c=0;
// let id = setInterval(() => {
// console.log(c++)
// },1000)
// setTimeout(() => {
// clearInterval(id)
// },2000)

let y = ++x;
console.log(x);
var x = 21;
console.log(y)
