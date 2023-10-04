import { useState,useEffect} from 'react'

function Score({score, bestScore, newGameHandle}) {
    return (
        <div className="scoreHolder">
            <button onClick={newGameHandle}>New Game</button>
            <p>Current score : {score}</p>
            <p>Best score : {bestScore}</p>
        </div>
    )
}

export default Score;