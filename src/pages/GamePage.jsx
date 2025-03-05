import { useState } from "react";
import themeBackground1 from "../assets/themes/beach-1.jpg";
import themeBackground2 from "../assets/themes/beach-2.jpg";
import themeBackground3 from "../assets/themes/beach-3.jpg";
import "../css/gamepage.css";

export default function GamePage() {
    const [modaleIsVisible, setModale] = useState(false);
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

            <button className="game-section__clickable game-section__clickable--1"></button>
            <button className="game-section__clickable game-section__clickable--2"></button>
            <button className="game-section__clickable game-section__clickable--3"></button>
        </section>
    );
}
