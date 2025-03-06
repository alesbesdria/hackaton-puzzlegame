import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Home.css";

export default function Accueil() {
    const [selectedTheme, setSelectedTheme] = useState("");
    const navigateToGame = useNavigate();
    const handlePlay = () => {
        if (selectedTheme) {
            navigateToGame(`/GamePage/${selectedTheme}`);
        } else {
            alert("Veuillez choisir un thème");
        }
    };

    return (
        <>
            <div className="background">
                <div className="container">
                    <h1 className="title">PUZZEN</h1>
                    <p className="explication">
                        Bienvenue dans notre jeu ! Détendez-vous et profitez des
                        magnifiques paysages naturels tout en s'amusant
                    </p>
                    <div className="select-game">
                        <button
                            className="button-play"
                            onClick={handlePlay}>
                            Jouer
                        </button>
                        <select
                            className="select-theme"
                            id=""
                            value={selectedTheme}
                            onChange={(e) => setSelectedTheme(e.target.value)}>
                            <option value="">-- Choisissez un thème --</option>
                            <option value="lotus"> Lotus 🪷</option>
                            <option value="beach">Plage 🏖️</option>
                            <option value="cascade">Cascade 🏞️</option>
                            <option value="meditation">Méditation 🧘‍♂️</option>
                        </select>
                    </div>
                </div>
                <footer className="credits">
                    <p className="credits__text">
                        Made with 🩷 and 😂 by{" "}
                        <a
                            className="credits__link"
                            href="https://github.com/TheoSkymel"
                            target="_blank">
                            Théo
                        </a>
                        ,{" "}
                        <a
                            className="credits__link"
                            href="https://github.com/alesbesdria"
                            target="_blank">
                            Mélissa
                        </a>{" "}
                        and{" "}
                        <a
                            className="credits__link"
                            href="https://github.com/TeddyAgt"
                            target="_blank">
                            Teddy
                        </a>
                    </p>
                </footer>
            </div>
        </>
    );
}
