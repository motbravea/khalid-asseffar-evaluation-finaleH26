import { useState } from "react";
import axios from "axios";

function MesEmprunts() {
  const [email, setEmail] = useState("");
  const [emprunts, setEmprunts] = useState([]);
  const [message, setMessage] = useState("");

  const rechercherEmprunts = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Veuillez entrer un email.");
      setEmprunts([]);
      return;
    }

    axios
      .get("http://localhost:5000/api/emprunts", {
        params: { email: email },
      })
      .then((res) => {
        setEmprunts(res.data);

        if (res.data.length === 0) {
          setMessage("Aucun emprunt trouvé pour cet utilisateur.");
        } else {
          setMessage("");
        }
      })
      .catch((err) => {
        console.error(err);
        setMessage("Erreur lors de la récupération des emprunts.");
      });
  };

  return (
    <div>
      <h1>Mes emprunts</h1>

      <form onSubmit={rechercherEmprunts}>
        <label>Email utilisateur : </label>
        <input
          type="email"
          placeholder="ex: jean.dupont@biblio.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Voir mes emprunts</button>
      </form>

      {message && <p>{message}</p>}

      {emprunts.length > 0 && (
        <table
          border="1"
          cellPadding="10"
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <thead>
            <tr>
              <th>Titre</th>
              <th>Auteur</th>
              <th>Date d’emprunt</th>
              <th>Date de retour</th>
            </tr>
          </thead>

          <tbody>
            {emprunts.map((emprunt) => (
              <tr key={emprunt.id_emprunt}>
                <td>{emprunt.titre}</td>
                <td>{emprunt.auteur}</td>
                <td>{new Date(emprunt.date_emprunt).toLocaleDateString()}</td>
                <td>{new Date(emprunt.date_retour).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MesEmprunts;