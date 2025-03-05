import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "../components/Modal";
import "../css/gamepage.css";

export default function GamePage() {
    const theme = useLoaderData();
    const [modaleIsVisible, setModaleIsVisible] = useState(false);
    const [puzzle, setPuzzle] = useState(null);
    const [visibleTiles, setVisibleTiles] = useState([false, false, false]);

    function handleClickPuzzleToggler(index) {
        setPuzzle(theme.puzzles[index]);
        setModaleIsVisible(true);
    }

    return (
        <section className={`game-section game-section--${theme.name}`}>
            {visibleTiles.every((i) => i) ? (
                <div className="game-section__video-container">
                    <video
                        className="game-section__video-background"
                        src={`/themes/${theme.name}.mp4`}
                        muted
                        autoPlay
                        loop></video>
                </div>
            ) : (
                <>
                    <div
                        className={`game-section__subsection game-section__subsection--1 ${
                            visibleTiles[0]
                                ? "game-section__subsection--visible"
                                : ""
                        }`}>
                        <img
                            src={`/themes/${theme.name}-1.jpg`}
                            alt=""
                        />
                    </div>
                    <div
                        className={`game-section__subsection game-section__subsection--2 ${
                            visibleTiles[1]
                                ? "game-section__subsection--visible"
                                : ""
                        }`}>
                        <img
                            src={`/themes/${theme.name}-2.jpg`}
                            alt=""
                        />
                    </div>
                    <div
                        className={`game-section__subsection game-section__subsection--3 ${
                            visibleTiles[2]
                                ? "game-section__subsection--visible"
                                : ""
                        }`}>
                        <img
                            src={`/themes/${theme.name}-3.jpg`}
                            alt=""
                        />
                    </div>

                    {!visibleTiles[0] && (
                        <button
                            onClick={() => handleClickPuzzleToggler(0)}
                            className="game-section__clickable game-section__clickable--1"></button>
                    )}
                    {!visibleTiles[1] && (
                        <button
                            onClick={() => handleClickPuzzleToggler(1)}
                            className="game-section__clickable game-section__clickable--2"></button>
                    )}
                    {!visibleTiles[2] && (
                        <button
                            onClick={() => handleClickPuzzleToggler(2)}
                            className="game-section__clickable game-section__clickable--3"></button>
                    )}
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
