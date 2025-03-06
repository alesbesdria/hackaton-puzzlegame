import { useState } from "react";
import "./Modal.css";
import cross from '/src/assets/icons/cross-mark-304374_640.png';

export default function Modal({ puzzle, setModaleIsVisible, setVisibleTiles }) {
    const [order, setOrder] = useState(puzzle.order);
    const [selectedPieces, setSelectedPieces] = useState([]);
    const [messageVisible, setMessageVisible] = useState(false);

    function handleClickPiece(imgId) {
        const newSelectedPieces = [...selectedPieces, imgId];
        setSelectedPieces(newSelectedPieces);

        if (newSelectedPieces.length === 2) {
            switchPieces(newSelectedPieces[0], newSelectedPieces[1]);
            setSelectedPieces([]);
        }
    }

    function switchPieces(a, b) {
        const indexA = order.indexOf(a);
        const indexB = order.indexOf(b);

        const newOrder = [...order];
        newOrder[indexA] = b;
        newOrder[indexB] = a;
        setOrder(newOrder);

        if (newOrder.every((value, index) => value === puzzle.correct_order[index])) {
            setMessageVisible(true);

            setVisibleTiles((prev) => {
                const newTiles = [...prev];
                newTiles[puzzle.index] = true;
                return newTiles;
            });
        }
    }

    return (
        <div className="modal-container">
            <div className="modal">
                <img 
                className="cross" 
                src={cross} 
                alt="croix fermeture" 
                onClick={() => setModaleIsVisible(false)}
                />
                <span className={`finish-message ${messageVisible ? 'finish' : ''}`}>
                    Félicitations, vous avez terminé le puzzle !
                </span>
                <div className="puzzle">
                    {order.map((img) => {
                        const isSelected = selectedPieces.includes(img);
                        return (
                            <img
                                key={img}
                                className={`images-puzzle ${isSelected ? 'clicked' : ''}`}
                                onClick={() => handleClickPiece(img)}
                                src={`/puzzles/${puzzle.id}-${img}.jpg`}
                                alt="pièce de puzzle"
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
