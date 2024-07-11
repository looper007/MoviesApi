const express = require("express");
const cors = require("cors");
const moviesRouter = require("./routes/movies");

const app = express();
const PORT = process.env.PORT || 80;

app.use(cors());
app.use(express.json());

app.use("/movies", moviesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
