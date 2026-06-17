import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Livres from "./pages/Livres";
import MesEmprunts from "./pages/MesEmprunts";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Bibliothèque numérique : Khalid Asseffar</h1>

        <nav>
          <Link to="/">
            Livres
          </Link>

          {" | "}

          <Link to="/emprunts">
            Mes emprunts
          </Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<Livres />}
          />

          <Route
            path="/emprunts"
            element={<MesEmprunts />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;