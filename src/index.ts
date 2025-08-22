import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import ticketRouter from "./routes/ticket";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", ticketRouter);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Backend with TypeScript + ts-node ✅");
});

app.get("/test", (req, res) => {
  console.log("📩 GET /test called"); // <-- ตรงนี้ควรจะ log ออกมา
  res.json({ message: "Hello from backend" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
