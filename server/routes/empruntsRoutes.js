const express = require("express");
const router = express.Router();
const db = require("../config/db");

/**
 * @swagger
 * /api/emprunts:
 *   get:
 *     summary: Récupérer les emprunts d’un utilisateur
 *     description: Retourne la liste des livres empruntés par un utilisateur à partir de son adresse courriel.
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: Adresse courriel de l’utilisateur
 *         example: jean.dupont@biblio.com
 *     responses:
 *       200:
 *         description: Liste des emprunts retournée avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_emprunt:
 *                     type: integer
 *                     example: 1
 *                   titre:
 *                     type: string
 *                     example: Le Petit Prince
 *                   auteur:
 *                     type: string
 *                     example: Antoine de Saint-Exupéry
 *                   date_emprunt:
 *                     type: string
 *                     example: 2026-06-01
 *                   date_retour:
 *                     type: string
 *                     example: 2026-06-15
 *       400:
 *         description: Email requis.
 *       500:
 *         description: Erreur serveur.
 */
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