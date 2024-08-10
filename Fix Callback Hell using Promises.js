
function asyncOperation1(callback) {
  setTimeout(() => {
    console.log("Operation 1 completed");
    callback(null, "Result 1");
  }, 1000);
}

function asyncOperation2(callback) {
  setTimeout(() => {
    console.log("Operation 2 completed");
    callback(null, "Result 2");
  }, 1000);
}

function asyncOperation3(callback) {
  setTimeout(() => {
    console.log("Operation 3 completed");
    callback(null, "Result 3");
  }, 1000);
}


// CallBack code
asyncOperation1((err, result1) => {
    if (err) return console.error(err);
    asyncOperation2(result1, (err, result2) => {
        if (err) return console.error(err);
        asyncOperation3(result2, (err, result3) => {
            if (err) return console.error(err);
            console.log('All operations completed with', result3);
        });
    });
});


// Promises code
asyncOperation1().then(result1 => {
    return asyncOperation2(result1);
}).then(result2 => {
    return asyncOperation3(result2);
}).then(result3 => {
    console.log('All operations completed with', result3);
}).catch(err => {
    console.error('An error occurred:', err);
});