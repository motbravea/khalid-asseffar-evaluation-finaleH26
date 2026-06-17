require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const livresRoutes = require("./routes/livresRoutes");
const empruntsRoutes = require("./routes/empruntsRoutes");

app.use("/api/livres", livresRoutes);
app.use("/api/emprunts", empruntsRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Serveur lancé sur le port ${process.env.PORT}`);
});