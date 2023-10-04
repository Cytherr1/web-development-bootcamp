const fs = require("fs");

fs.writeFile("message.txt", "ossurdum", (err) => {
    if (err) throw err;
    console.log("Saved.");
})

fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
})