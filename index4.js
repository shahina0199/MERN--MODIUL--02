// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Configure the GET request
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

// Set up a callback function to handle the response
xhr.onload = function() {
  // Check if the request was successful
  if (xhr.status >= 200 && xhr.status < 300) {
    // Parse the response JSON
    var data = JSON.parse(xhr.responseText);
    // Print or console.log the data
    console.log(data);
  } else {
    console.error('Request failed with status:', xhr.status);
  }
};

// Set up a callback function to handle errors
xhr.onerror = function() {
  console.error('Request error');
};

// Send the request
xhr.send();
