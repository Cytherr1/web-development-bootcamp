import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const filepath = dirname(fileURLToPath(import.meta.url))

app.use(bodyParser.urlencoded({extended: true}))

app.post("/submit", (req, res) => {
  res.send(`
  <h1>Your band name is: <h1/>
  <h2>${req.body.street}${req.body.pet}✌🏼<h2/>
  `)
});

app.get("/", (req, res) => {
  res.sendFile(filepath + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
