// AJAX (Asynchronous JavaScript and XML) is a technique used in web development to update parts of a web page without reloading the entire page. Here's a simple breakdown:

// Main Work of AJAX:
// Sending a Request:

// AJAX allows you to send a request to a server from the browser without refreshing the page. For example, if you want to get the latest news or submit a form, AJAX sends this request in the background.
// Receiving Data:

// Once the server processes the request, it sends back data (often in JSON format) to the browser. This data could be new information, like updated prices, new messages, or search results.
// Updating the Page:

// After receiving the data, AJAX uses JavaScript to update specific parts of the web page without needing to reload the entire page.This makes the user experience smoother and faster, as only the necessary content changes.


// How It Works in Simple Terms:
// Request: AJAX sends a request to the server to get new data (like asking a server for the latest weather update).
// Response: The server responds with the requested data (like sending back the weather info).
//     Update: JavaScript updates the specific part of the page with the new data(like changing the weather display on your screen without refreshing the whole page).







document.getElementById('fetchButton').addEventListener('click', function () {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Define what happens when the request is successful
    xhr.onload = function () {
        if (xhr.status == 200) {
            // Parse the JSON response
            var user = JSON.parse(xhr.responseText);

            // Display user information
            var userInfoDiv = document.getElementById('userInfo');
            userInfoDiv.innerHTML = `
                    <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
                    <p>Email: ${user.email}</p>
                    <img src="${user.picture.large}" alt="User Picture">
                `;
        }
    };

    // Define the type of request and the URL
    xhr.open('GET', 'https://randomuser.me/api/', true);

    // Send the request
    xhr.send();
});
