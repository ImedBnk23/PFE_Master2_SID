import express from "express";
import multer from "multer";
import { spawn } from "child_process";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/analyze", upload.single("image"), (req, res) => {
  const imagePath = req.file.path;

  const python = spawn("python", [
    "../ai-model/app.py",
    imagePath,
  ]);

  let output = "";

  python.stdout.on("data", (data) => {
    output += data.toString();
  });

  python.stderr.on("data", (err) => {
    console.log("Python error:", err.toString());
  });

  python.on("close", () => {
    try {
      const clean = output.trim();
      const [diagnosis, confidence] = clean.split("|");

      return res.json({
        diagnosis,
        type: diagnosis,
        confidence,
      });
    } catch (e) {
      return res.status(500).json({
        error: "Invalid Python output",
      });
    }
  });
});

export default router;