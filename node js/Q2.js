var fs = require("fs");

fs.readFile("temp.txt", function(err, buf) {
  console.log(buf.toString());
});
var fs = require("fs");
fs.readFile("temp.txt", function(err, buf) {
    console.log(buf);
  });
  fs.readFile("not-found.txt", "utf-8", (err, data) => {
    if (err) { console.log(err) }
    console.log(data);
});
var fs = require("fs");

fs.readFile("temp.txt", "utf-8", (err, data) => {
  console.log(data);
});
