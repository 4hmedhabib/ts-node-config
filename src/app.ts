import express, { Request, Response, NextFunction } from "express";
const app = express();
const PORT = 5000;

interface Cal {
  x: number;
  y: number;
}

app.get("/add", (req: Request, res: Response, next: NextFunction) => {
  const addFunc = (x: number, y: number) => {
    return x + y;
  };

  res.send(addFunc(2, 5));
});

app.listen(PORT, () => {
  console.log("SERVER RUNNING PORT : ", PORT);
});
