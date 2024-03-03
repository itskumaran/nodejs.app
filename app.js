// Import required modules
const http = require('http');
const url = require('url');

// Define the port number
const PORT = 3000;

// Create a function to handle requests
const requestHandler = (req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url, true);
  
  // Set the response header
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Routing
  if (parsedUrl.pathname === '/') {
    res.end('Welcome to the homepage!\n');
  } else if (parsedUrl.pathname === '/about') {
    res.end('About page\n');
  } else {
    res.end('Page not found\n');
  }
};

// Create a server
const server = http.createServer(requestHandler);

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
