import { useState } from 'react';
import './Modal.css';


export default function Modal({puzzle}) {
const [order, setOrder] = useState(puzzle.order);
const [selectedPieces, setSelectedPieces] = useState([])

console.log(puzzle);

function handleClickPiece(imgId){
    // stocker imgId dans selectedPieces
    const selectedPieces = [];
    selectedPieces =+ selectedPieces(imgId);
    // si selectedPieces.length 2, faire le switch, puis vider selectedPieces (appeler switchPieces)
    if (selectedPieces.length == 2){
        switchPieces(); //
    }
    // sinon rien
    
}

function switchPieces(a, b) {
    // switch les pieces dans order
    setOrder(([a, b]) => [b, a]);
    // compare order à puzzle.correct_order
    // si identique, fermer la modale, afficher un tiers de l'image
    // sinon rien
}
    
    return <>
        <div className='modal'>
            <div className="puzzle">

                {order.map((img)=> {
                    return <img onClick={() => handleClickPiece(img)} src={`/puzzles/${puzzle.id}-${img}.jpg`} alt="" />
                    // 
                }
                )}

            </div>
        </div>
    </>
    
}