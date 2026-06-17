import express from "express";
import sum from "./sum.js";

const app = express();
const PORT =8000;

app.listen(PORT, () => {
  console.log("Server is listening on port ${PORT}");

});

app.get("/home", (req, res) => {
  res.json({ 
    message: "Hello World"
 }
);
})

app.get("/sum/:a/:b", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const result = sum(a, b);
  res.json({ result });
})