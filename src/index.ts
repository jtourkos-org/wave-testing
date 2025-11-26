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

const users = [
  { id: "1", name: "John Doe", email: "john@example.com" },
  { id: "2", name: "Jane Smith", email: "jane@example.com" },
  { id: "3", name: "Bob Wilson", email: "bob@example.com" },
];

app.get("/users/:id", (req: Request, res: Response) => {
  const user = users.find((u) => u.id === req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
