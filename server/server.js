import express from "express";
import cors from "cors";
import "./config/dotenv.js";
import keyboardsRouter from "./routes/keyboards.js";

const app = express();

app.use(cors());
app.use("/keyboards", keyboardsRouter);

app.get("/", (req, res) => {
  res
    .status(200)
    .send('<h1 style="text-align: center; margin-top: 50px;">Keebs API</h1>');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
