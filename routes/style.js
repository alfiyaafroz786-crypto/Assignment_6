module.exports = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/css" });
  res.end(`
    body {
      font-family: Arial;
      background-color: #f4f4f4;
      padding: 20px;
    }

    h1 {
      color: #333;
    }

    nav a {
      margin-right: 10px;
      text-decoration: none;
      color: blue;
    }
  `);
};
