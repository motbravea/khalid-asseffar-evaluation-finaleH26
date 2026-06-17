const express = require("express");
const router = express.Router();
const db = require("../config/db");

// GET /api/emprunts?email=jean.dupont@biblio.com
router.get("/", (req, res) => {
  const email = req.query.email;

  if (!email) {
    return res.status(400).json({ message: "Email requis" });
  }

const sql = `
  SELECT 
    e.id_emprunt,
    l.titre,
    l.auteur,
    e.date_emprunt,
    e.date_retour_prevue AS date_retour,
    e.date_retour_reelle
  FROM emprunts e
  JOIN utilisateurs u ON e.id_utilisateur = u.id_utilisateur
  JOIN livres l ON e.id_livre = l.id_livre
  WHERE u.email = ?
`;

  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error("Erreur SQL :", err);
      return res.status(500).json({ message: "Erreur serveur" });
    }

    res.status(200).json(results);
  });
});

module.exports = router;