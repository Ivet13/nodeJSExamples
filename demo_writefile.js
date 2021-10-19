const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile("demofile1.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
  fs.appendFile("mynewfile1.txt", "Hello content!", function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
  fs.rename("mynewfile1.txt", "myrenamedfile.txt", function (err) {
    if (err) throw err;
    console.log("File Renamed!");
  });
  fs.open("mynewfile2.txt", "w", function (err, file) {
    if (err) throw err;
    console.log("Saved!");
  });
  fs.writeFile("mynewfile3.txt", "Hello content!", function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
  fs.appendFile("mynewfile1.txt", " This is my text.", function (err) {
    if (err) throw err;
    console.log("Updated!");
  });
  fs.writeFile("mynewfile3.txt", "This is my text", function (err) {
    if (err) throw err;
    console.log("Replaced!");
  });
  fs.unlink("mynewfile2.txt", function (err) {
    if (err) throw err;
    console.log("File deleted!");
  });

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
