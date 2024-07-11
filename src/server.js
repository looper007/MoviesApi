const express = require("express");
const cors = require("cors");
const moviesRouter = require("./routes/movies");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello from your Node.js application deployed on Vercel!");
});

app.use("/movies", moviesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
