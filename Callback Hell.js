// Callback Hell is a situation in JavaScript where you have a lot of nested callbacks, making your code look messy and hard to understand.

// What is a Callback?
// A callback is a function that gets passed into another function and is executed after the first function finishes its task. For example, if you want to run some code after fetching data from a server, you use a callback.

// What is Callback Hell?
// When you need to perform multiple asynchronous tasks one after another, you might end up nesting callbacks inside callbacks, leading to deeply indented and hard-to-read code. This is what we call "Callback Hell

// Example of Callback Hell:
// Imagine you want to:

// Get user data from a server.
// Then, fetch the user's posts.
// Then, get comments on those posts.
// Finally, display everything on the page.

code: getUserData(function (user) {
  getPosts(user.id, function (posts) {
    getComments(posts[0].id, function (comments) {
      displayData(user, posts, comments);
    });
  });
});

// Why is it Bad?

// Hard to Read: The code becomes difficult to follow because it's deeply nested and each level depends on the previous one.
// Difficult to Maintain: If you need to make changes or handle errors, it's hard to do without breaking something.
// Error Handling: Managing errors in each callback adds more complexity, making the code even messier.


// How to Avoid Callback Hell?
// Promises: Instead of nesting callbacks, you can use promises, which allow you to chain operations more cleanly.
// Async/Await: This is a more modern approach that makes asynchronous code look and behave more like synchronous code, making it easier to read and write.