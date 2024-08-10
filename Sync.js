// In Synchronous function
// synchronous code runs on the main thread, meaning tasks are executed one at a time in the order they are written. The main thread is like a single lane on a road where only one car (task) can drive at a time. If a car stops, all the cars behind it must wait until it moves.

// Single Lane (Main Thread): JavaScript operates on a single thread, so only one piece of code runs at any given moment.

// One at a Time (Synchronous Execution): Each task must complete before the next one can start. If a task takes a long time, like fetching data from a server, everything else must wait.

// Blocking the Road: If a task is slow, like a car stopping in the lane, it blocks the other tasks (cars) behind it until it finishes. This can make your program unresponsive.

// So, synchronous code in JavaScript runs sequentially on the main thread, causing other tasks to wait if one takes too long.



console.log("Start");

function taskOne() {
    console.log("Task One");
}

function taskTwo() {
    console.log("Task Two");
}

taskOne();
taskTwo();

console.log("End");




// PRINT:

// Start
// Task One
// Task Two
// End