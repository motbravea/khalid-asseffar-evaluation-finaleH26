require("dotenv").config();

const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();

app.use(cors());
app.use(express.json());

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Bibliothèque",
      version: "1.0.0",
      description:
        "Documentation de l’API REST de l’application bibliothèque développée avec Express et MySQL.",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Serveur local",
      },
      {
        url: "https://bibliotheque-backend-ggrx.onrender.com",
        description: "Serveur déployé sur Render",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send(
    "API Bibliothèque en ligne. Utilisez /api/livres, /api/emprunts?email=jean.dupont@biblio.com ou /api-docs"
  );
});

const livresRoutes = require("./routes/livresRoutes");
const empruntsRoutes = require("./routes/empruntsRoutes");

app.use("/api/livres", livresRoutes);
app.use("/api/emprunts", empruntsRoutes);

if (require.main === module) {
  app.listen(process.env.PORT, () => {
    console.log(`Serveur lancé sur le port ${process.env.PORT}`);
  });
}

module.exports = app;