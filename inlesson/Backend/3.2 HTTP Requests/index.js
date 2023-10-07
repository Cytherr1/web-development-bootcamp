import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!")
});

app.get("/about", (req, res) => {
    res.send("Hi my name is Uğur and I'm a software engineer.")
});

app.get("/contact", (req, res) => {
    res.send("Phone: +905315313131 \ne-mail: sabun@gmail.com")
});

app.listen(3000, () => {
    console.log(`Server running on ${port}.`)
});