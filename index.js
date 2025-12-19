const http = require("http");

// Import route modules
const homeRoute = require("./routes/home");
const aboutRoute = require("./routes/about");
const contactRoute = require("./routes/contact");
const servicesRoute = require("./routes/services");
const styleRoute = require("./routes/style");

const PORT = 3000;

const server = http.createServer((req, res) => {

  if (req.url === "/" || req.url === "/home") {
    homeRoute(req, res);
  }
  else if (req.url === "/about") {
    aboutRoute(req, res);
  }
  else if (req.url === "/contact") {
    contactRoute(req, res);
  }
  else if (req.url === "/services") {
    servicesRoute(req, res);
  }
  else if (req.url === "/style.css") {
    styleRoute(req, res);
  }
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`
      <h1>404 - Page Not Found</h1>
      <p>This route does not exist.</p>
    `);
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
