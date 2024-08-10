// Asynchronous code allows multiple tasks to be managed without blocking the main thread, similar to how a browser can load different tabs independently without freezing the entire window.

// Here's how it works:

// Main Lane (Main Thread): The main thread is still the primary lane where tasks are executed, but it can delegate tasks to other lanes (like background workers) without waiting for them to finish.

// Background Workers (Web APIs or Browser Threads): When you perform an asynchronous operation, like fetching data from a server, the browser moves that task to a background worker. This is like opening a new tab where the task runs independently.

// Task Queuing: Once the background task is complete, the browser signals the main thread. The result of the task is then queued, waiting for the main thread to be free. This queue is like a list of notifications that the main thread checks after finishing each current task.

// Non-Blocking: Because the main thread isn’t waiting for the background task, it can continue running other code. This prevents the browser (or the program) from freezing and allows it to handle multiple tasks smoothly.

// So, in JavaScript, asynchronous code uses the browser's threads to handle tasks in the background, allowing the main thread to continue running other code without getting blocked. This makes the experience smoother and more responsive, like browsing multiple tabs without any slowdown.


console.log("Start");

function asyncTaskOne(callback) {
    setTimeout(() => {
        console.log("Async Task One");
        callback();
    }, 1000); // Simulates an async task with a 1-second delay
}

function taskTwo() {
    console.log("Task Two");
}

asyncTaskOne();

taskTwo();

console.log("End");



// OUTPUT:

// Start
// Task Two
// End
// Async Task One