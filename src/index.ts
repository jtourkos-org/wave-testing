import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Hello, World!" });
});

app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.get("/tag-11", (_req: Request, res: Response) => {
  res.json({ tag: "11", message: "Tag 11 endpoint" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
