// Import the core HTTP module
const http = require('http');

// Create a server that listens on port 3000
const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/plain');

  // Write the response body
  res.write('Hello, World!');

  // End the response
  res.end();
});

// Start the server
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
