const express = require("express");
const router = express.Router();
const db = require("../config/db");

/**
 * @swagger
 * /api/livres:
 *   get:
 *     summary: Récupérer la liste des livres disponibles
 *     description: Retourne la liste des livres disponibles dans la base de données.
 *     responses:
 *       200:
 *         description: Liste des livres disponibles retournée avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_livre:
 *                     type: integer
 *                     example: 4
 *                   titre:
 *                     type: string
 *                     example: Harry Potter à l'école des sorciers
 *                   auteur:
 *                     type: string
 *                     example: J.K. Rowling
 *       500:
 *         description: Erreur serveur.
 */
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