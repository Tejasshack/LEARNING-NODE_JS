const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<html>");
    res.write(
      "<h1>This is Home page and I created a server and also set up a request handler</h1>"
    );
    res.write("<body>");
    res.write(
      '<form action="/adduser" method="POST"><label>UserName</label><input type="text" name="addusers"><button type="submit">Submit</button></form>'
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/adduser" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString(); // Call toString() function
      const users = parsedBody.split("=")[1];
      console.log("Here is the new user: " + users);
      res.statusCode = 302;
      res.setHeader('Location', '/'); // Redirect to home page after submission
      return res.end();
    });
  }

  if (url === "/users") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<html>");
    res.write("<h1>Here is the list of users</h1>");
    res.write("<ol>");
    res.write("<li>User 1: Akash</li>");
    res.write("<li>User 2: Tejas</li>");
    res.write("</ol>");
    res.write("</html>");
    return res.end();
  }

  res.statusCode = 404;
  res.write("<html>");
  res.write("<h1>Page not found</h1>");
  res.write("</html>");
  return res.end();
};

module.exports = requestHandler;
