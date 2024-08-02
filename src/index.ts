import express, { Request, Response } from "express";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.get("/id/:id/name/:name", (req: Request, res: Response) => {
  res.send({
    id: req.params.id,
    name: req.params.name,
  });
});

app.post("/", (req: Request, res: Response) => {
  res.send({ data: req.body });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
