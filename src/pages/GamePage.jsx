import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import themeBackground1 from "../assets/themes/beach-1.jpg"; // a changer pluxs tard avec les images qui viennent de l'objet
import themeBackground2 from "../assets/themes/beach-2.jpg"; // a changer pluxs tard avec les images qui viennent de l'objet
import themeBackground3 from "../assets/themes/beach-3.jpg"; // a changer pluxs tard avec les images qui viennent de l'objet
import Modal from "../components/Modal";
import "../css/gamepage.css";

export default function GamePage() {
    const theme = useLoaderData();

    const [modaleIsVisible, setModaleIsVisible] = useState(false);
    const [puzzle, setPuzzle] = useState(theme.puzzles[0]);
    const [visibleTiles, setVisibleTiles] = useState([false, false, false]);

    function handleClickPuzzleToggler() {}

    return (
        <section className="game-section">
            <div className="game-section__subsection game-section__subsection--1">
                <img
                    src={themeBackground1}
                    alt=""
                />
            </div>
            <div className="game-section__subsection game-section__subsection--2">
                <img
                    src={themeBackground2}
                    alt=""
                />
            </div>
            <div className="game-section__subsection game-section__subsection--3">
                <img
                    src={themeBackground3}
                    alt=""
                />
            </div>

            <button
                onClick={() => handleClickPuzzleToggler(0)}
                className="game-section__clickable game-section__clickable--1"></button>
            <button
                onClick={() => handleClickPuzzleToggler(1)}
                className="game-section__clickable game-section__clickable--2"></button>
            <button
                onClick={() => handleClickPuzzleToggler(2)}
                className="game-section__clickable game-section__clickable--3"></button>

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
