import express, { Request, Response, Express } from "express";

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`System running at http://localhost:${port}`);
});
