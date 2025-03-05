import { useState } from "react";
import themeBackground1 from "../assets/themes/beach-1.jpg";
import themeBackground2 from "../assets/themes/beach-2.jpg";
import themeBackground3 from "../assets/themes/beach-3.jpg";
import Modal from "../components/Modal";
import "../css/gamepage.css";
import { useParams } from "react-router-dom";
import theme from "../themes/themes.js";
import RetourAccueil from "../components/RetourAccueil";

export default function GamePage() {

// const {theme} = useParams();
console.log(theme);


    const [modaleIsVisible, setModale] = useState(false);
    const [puzzle, setPuzzle] = useState(theme.puzzles[0]);
    
    return (
        <section className="game-section">
            <RetourAccueil />
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
            <button className="game-section__clickable game-section__clickable--1"></button>
            <button className="game-section__clickable game-section__clickable--2"></button>
            <button className="game-section__clickable game-section__clickable--3"></button>

        {modaleIsVisible && <Modal puzzle = {puzzle} />}
        </section>
    );
}
