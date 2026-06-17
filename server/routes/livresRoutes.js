const express = require("express");
const router = express.Router();
const db = require("../config/db");

// GET /api/livres
router.get("/", (req, res) => {
  const sql = "SELECT * FROM livres WHERE disponible = 1";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Erreur SQL :", err);
      return res.status(500).json({ message: "Erreur serveur" });
    }

    res.status(200).json(results);
  });
});

module.exports = router;