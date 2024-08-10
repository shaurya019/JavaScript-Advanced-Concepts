// async Function
// An async function is a function declared with the async keyword.It allows you to write asynchronous code that looks and behaves like synchronous code.When you define a function as async, it automatically returns a promise, and any values you return from that function are wrapped in a promise.

// async function example() {
//     return 'Hello, world!';
// }

// example().then(console.log); // Outputs: 'Hello, world!'


// await Expression
// The await keyword is used inside an async function to pause the execution of the function until the promise it is waiting for is resolved.This makes it easier to work with promises by allowing you to write code that looks synchronous, without using then() chains.

// async function fetchData() {
//     let response = await fetch('https://api.example.com/data');
//     let data = await response.json();
//     return data;
// }

// fetchData().then(data => console.log(data));


// Error Handling
// You can handle errors in async functions using try...catch blocks, which makes managing exceptions in asynchronous code straightforward:

// async function fetchData() {
//     try {
//         let response = await fetch('https://api.example.com/data');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         let data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//     }
// }

// fetchData();
