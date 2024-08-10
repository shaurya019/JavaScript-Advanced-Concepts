// Promises are a key part of asynchronous programming in JavaScript. Understanding how they work behind the scenes, especially in terms of the microtask and callback queues, can help you grasp their behavior better. Here’s a simplified explanation:

// How Promises Work
// Creation and Execution:

// When a Promise is created, it immediately starts executing the function passed to its constructor. This function is called the "executor" function, and it has two arguments: resolve and reject, which are functions used to settle the promise.
// Microtasks and the Microtask Queue:

// Once the promise's executor function calls resolve or reject, the corresponding promise callback (e.g., .then or .catch) is scheduled to run. These callbacks are not executed immediately but are instead placed in the "microtask queue" (or "job queue").
// The microtask queue is a special queue that processes tasks after the currently executing script and before the next rendering or task from the callback queue.
// Event Loop and Microtasks:

// The JavaScript event loop is responsible for managing the execution of tasks. It has two primary queues to manage: the macro task queue (which includes tasks like I/O events, timers, and user interactions) and the microtask queue.
// After the execution of the current synchronous code completes, the event loop processes all tasks in the microtask queue before moving on to the next task in the macro task queue.
// Detailed Flow
// Synchronous Code Execution:

// When you run a script, JavaScript first executes all the synchronous code.
// Microtask Queue Processing:

// After the synchronous code execution, JavaScript checks the microtask queue. If there are any tasks (like promise handlers), they are executed in the order they were added.
// Rendering and Macro Tasks:

// After processing the microtasks, JavaScript then continues to process tasks from the macro task queue (e.g., events, setTimeout callbacks).
// After each macro task, the event loop will process all available microtasks before moving on to the next macro task.




const resolveBtn = document.querySelector('#resolve-btn')
const rejectBtn = document.querySelector('#reject-btn')

const p = new Promise((resolve, reject) => {
  resolveBtn.addEventListener('click', () => {
    resolve('Promise Resolveddd')
  })

  rejectBtn.addEventListener('click', () => {
    reject('Promise Rejected')
  })
})

p.then((data) => {
  console.log(data);
  return 155
}).then((data) => {
  console.log(data);
  return 'Anurag'
}).then((data) => {
  console.log(data);
}).catch(err => {
  console.log(err);
})