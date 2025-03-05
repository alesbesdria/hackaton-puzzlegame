import "../css/Home.css";
import { useState } from "react";
// import RetourAccueil from "../components/RetourAccueil";

export default function Accueil() {

  const [selectedTheme, setSelectedTheme] = useState("");

  return (
    <>
      <div className="background">
        <div className="container">
          <h1 className="title">PUZZEN</h1>
          <p className="explication">
            Bienvenue dans notre jeu ! Détendez-vous et profitez des magnifiques
            paysages naturels tout en s'amusant
          </p>
          <div className="select-game">
            <button className="button-play">Jouer</button>
            <select
              className="select-theme"
              id=""
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
            >
              <option value=""> Lotus 🪷</option>
              <option value="">Plage 🏖️</option>
              <option value="">Cascade 🏞️</option>
              <option value="">Méditation 🧘‍♂️</option>
            </select>
      {/* <RetourAccueil/> */}
          </div>
        </div>
      </div>
    </>
  );
}
