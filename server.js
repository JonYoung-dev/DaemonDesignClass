import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { configDotenv } from "dotenv";
configDotenv();

const PORT = process.env.PORT || 3000;

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.get("/:page", (req, res) => {
  const filePath = path.join(__dirname, "public", `${req.params.page}.html`);
  res.sendFile(filePath, err => {
    if (err) res.status(404).send("Page not found");
  });
});

app.listen(PORT, () => console.log(`Server running at ${process.env.IS_HOSTED}`));
