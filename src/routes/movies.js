const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const router = express.Router();
const db = new sqlite3.Database("./db/movies.db");

// GET /movies endpoint with optional query parameters for search and pagination
router.get("/", (req, res) => {
  const { searchText, page = 1, pageSize = 10 } = req.query;
  const limit = parseInt(pageSize);
  const offset = (parseInt(page) - 1) * limit;
  let query = "SELECT * FROM movies";
  //test
  if (searchText) {
    query += ` WHERE title LIKE '%${searchText}%' OR director LIKE '%${searchText}%'`;
  }

  query += ` LIMIT ${limit} OFFSET ${offset}`;

  db.all(query, (err, movies) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(movies);
  });
});

module.exports = router;
