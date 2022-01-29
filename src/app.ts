import express from "express";
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(PORT, () => {
  console.log("SERVER RUNNING PORT : ", PORT);
});
