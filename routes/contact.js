module.exports = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <html>
      <head>
      <title>Contact</title>
      <link rel="stylesheet" href="/style.css">
      </head> 
      <body>
        <h1>Contact Page</h1>
        <nav>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/services">Services</a>
        </nav>
        <p>Email: contact@example.com</p>
      </body>
    </html>
  `);
};
