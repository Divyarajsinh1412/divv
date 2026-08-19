const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      "<h1>Hello coder</h1> <h2>I am a passionate and motivated Computer Science professional currently pursuing my Master of Computer Applications (MCA), with a strong interest in Artificial Intelligence, Machine Learning, Cybersecurity, and software development. </h2>",
    );
  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h2>I have completed my B.Sc. in Computer Science and have practical experience working with technologies such as Python, Java, JavaScript, PHP, MySQL, MongoDB, Flask, React, Node.js, and various AI/ML tools. I enjoy building real-world projects, solving technical problems, and continuously learning new technologies. My goal is to develop strong industry-ready skills and build innovative software solutions that can solve practical problems. I am a hardworking, self-motivated, and career-focused person who believes in learning through practical experience and consistently improving my technical and professional abilities.</h2>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - Page Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Node.js server running at http://localhost:3000");
});