import { useState } from "react";
import "./Modal.css";

export default function Modal({ puzzle, setModaleIsVisible, setVisibleTiles }) {
    const [order, setOrder] = useState(puzzle.order);
    const [selectedPieces, setSelectedPieces] = useState([]);

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
            setModaleIsVisible(false);

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
                <div className="puzzle">
                    {order.map((img) => {
                        const isSelected = selectedPieces.includes(img);
                        return (
                            <img
                                key={img}
                                className={`images-puzzle ${isSelected ? 'clicked' : ''}`}
                                onClick={() => handleClickPiece(img)}
                                src={`/puzzles/${puzzle.id}-${img}.jpg`}
                                alt=""
                                style={isSelected ? { transform: 'scale(1.1)' } : {}}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
