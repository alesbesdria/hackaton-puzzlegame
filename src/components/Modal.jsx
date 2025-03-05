import './Modal.css';


export default function Modal({puzzle}) {

console.log(puzzle);

    
    return <>
        <div className='modal'>
            <div className="puzzle">
                {/* mettre images puzzle  */}
                {puzzle.order.map((img)=> {
                    return <img src={`/puzzles/${puzzle.id}-${img}.jpg`} alt="" />
                }
                )}

            </div>
        </div>
    </>
    
}