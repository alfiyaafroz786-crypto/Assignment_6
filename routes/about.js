module.exports = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <html>
      <head><title>About</title>
       <link rel="stylesheet" href="/style.css">
       </head>
      <body>
        <h1>About Page</h1>
        <nav>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/services">Services</a>
        </nav>
        <p>This is the about page.</p>
      </body>
    </html>
  `);
};
