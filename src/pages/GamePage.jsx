import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "../components/Modal";
import RetourAccueil from "../components/RetourAccueil";
import "../css/gamepage.css";
import { ThemeContext } from "../App";

export default function GamePage() {
  const theme = useLoaderData();
  const [modaleIsVisible, setModaleIsVisible] = useState(false);
  const [puzzle, setPuzzle] = useState(null);
  const [visibleTiles, setVisibleTiles] = useState([false, false, false]);
// const { themeUnlock, setThemeUnlock } = useContext(ThemeContext);

    

  function handleClickPuzzleToggler(index) {
    setPuzzle(theme.puzzles[index]);
    setModaleIsVisible(true);
  }

  return (
    <section className={`game-section game-section--${theme.name}`}>
      <RetourAccueil />

      {visibleTiles.every((i) => i) ? (
        <div className="game-section__video-container">
          <video
            className="game-section__video-background"
            src={`/themes/${theme.name}.mp4`}
            muted
            autoPlay
            loop
          ></video>
        </div>
      ) : (
        <>
          <div
            className={`game-section__subsection game-section__subsection--1 ${
              visibleTiles[0] ? "game-section__subsection--visible" : ""
            }`}
          >
            <img src={`/themes/${theme.name}-1.jpg`} alt="" />
          </div>
          <div
            className={`game-section__subsection game-section__subsection--2 ${
              visibleTiles[1] ? "game-section__subsection--visible" : ""
            }`}
          >
            <img src={`/themes/${theme.name}-2.jpg`} alt="" />
          </div>
          <div
            className={`game-section__subsection game-section__subsection--3 ${
              visibleTiles[2] ? "game-section__subsection--visible" : ""
            }`}
          >
            <img src={`/themes/${theme.name}-3.jpg`} alt="" />
          </div>

          {theme.clickables_position.map((position, index) => {
            return (
              !visibleTiles[index] && (
                <button
                  onClick={() => handleClickPuzzleToggler(index)}
                  className="game-section__clickable game-section__clickable--1"
                  style={position}
                ></button>
              )
            );
          })}
        </>
      )}

      {modaleIsVisible && (
        <Modal
          puzzle={puzzle}
          setModaleIsVisible={setModaleIsVisible}
          setVisibleTiles={setVisibleTiles}
        />
      )}
    </section>
  );
}
