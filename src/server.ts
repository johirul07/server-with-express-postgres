import express, { Request, Response } from "express";

const app = express();
const port = 5000;

//*pares
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);

  res.status(201).json({
    success: true,
    message: "APIs is working",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
