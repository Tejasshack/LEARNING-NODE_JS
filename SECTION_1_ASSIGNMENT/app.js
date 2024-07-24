const http = require('http');
const requestHandler = require('./routes');

// Create the HTTP server and pass the requestHandler function
const server = http.createServer(requestHandler);

// Start the server on port 3000 and log a message indicating the server has started
server.listen(3000, () => {
  console.log("Server started on port 3000");
});
