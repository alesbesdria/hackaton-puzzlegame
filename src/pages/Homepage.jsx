import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import ModalVideo from "../components/ModalVideo";
import "../css/Home.css";
import { ThemeContext } from "../App";
import "../css/VideoHome.css";

export default function Accueil() {
  const [selectedTheme, setSelectedTheme] = useState("");
  const [selectedThemeVideo, setSelectedThemeVideo] = useState("");
  const navigateToGame = useNavigate();
  // const [videoUrl, setVideoUrl] = useState("");

  const handlePlay = () => {
    if (selectedTheme) {
      navigateToGame(`/GamePage/${selectedTheme}`);
    } else {
      alert("Veuillez choisir un thème");
    }
  };

  const handleButtonClick = (theme) => {
    if (themeUnlock[theme]) {
      console.log(themeUnlock);
      setSelectedThemeVideo(theme);
    }
  };
  const { themeUnlock, setThemeUnlock } = useContext(ThemeContext);

  return (
    <>
      <div className="background">
        {selectedThemeVideo ? (
          <div className="test">
            {" "}
            <video
              className="video-home"
              src={`/themes/${selectedThemeVideo}.mp4`}
              autoPlay
              loop
              muted
            />
          </div>
        ) : null}
        <div className="button-container">
          <button
            className="btn"
            onClick={() => handleButtonClick("lotus")}
            style={{ backgroundColor: "#E8B4B8" }}
          >
            Lotus
          </button>
          <button
            className="btn"
            onClick={() => handleButtonClick("beach")}
            style={{ backgroundColor: "#FCE79C" }}
          >
            Plage
          </button>
          <button
            className="btn"
            onClick={() => handleButtonClick("cascade")}
            style={{ backgroundColor: "#A7C7E7" }}
          >
            Cascade
          </button>
          <button
            className="btn"
            onClick={() => handleButtonClick("meditation")}
            style={{ backgroundColor: "#A7D7C5" }}
          >
            Méditation
          </button>
        </div>{" "}
        <div className="container">
          <h1 className="title">PUZZEN</h1>
          <p className="explication">
            Bienvenue dans notre jeu ! Détendez-vous, profitez des magnifiques
            paysages naturels tout en s'amusant ! 🌺
          </p>
          <p className="but-game">
            But du jeu : Une fois votre thème choisi, cherchez les trois
            éléments cachés afin de pouvoir jouer.
          </p>
          <p className="but-game1">
            Débloquez des thèmes pour personnaliser à votre guise la page
            d'accueil.
          </p>
          <div className="select-game">
            <button className="button-play" onClick={handlePlay}>
              Jouer
            </button>
            <select
              className="select-theme"
              id=""
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
            >
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
              target="_blank"
            >
              Théo
            </a>
            ,{" "}
            <a
              className="credits__link"
              href="https://github.com/alesbesdria"
              target="_blank"
            >
              Mélissa
            </a>{" "}
            and{" "}
            <a
              className="credits__link"
              href="https://github.com/TeddyAgt"
              target="_blank"
            >
              Teddy
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
