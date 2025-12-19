module.exports = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <html>
      <head>
        <title>Services</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <h1>Our Services</h1>
        <nav>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/services">Services</a>
        </nav>
        <ul>
          <li>Laundry Washing</li>
          <li>Dry Cleaning</li>
          <li>Ironing</li>
        </ul>
      </body>
    </html>
  `);
};
