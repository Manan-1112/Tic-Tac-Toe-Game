import React, { useState } from "react";
import Square from "./square";
const Board = () => {
    const [state, setState] = useState(Array(9).fill(null))
    const [isXturn, setIsXturn] = useState(true)
    const handleClick = (index) => {
        if(state[index] !== null){
            return;
        }
        const copyState = [...state]
        copyState[index] = isXturn ? "X" : "O"
        setIsXturn(!isXturn)
        setState(copyState)
    }
    const checkDraw = () => {
        let count = 0 
        state.forEach((element) => {
            if (element !== null) {
                count++
            }
        })
        return count === 9 ? true : false
    }   
    const checkWinner = () => {
        const winningLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let logic of winningLogic) {
            const [a, b, c] = logic
            if (state[a] !== null && state[a] === state[b] && state[b] === state[c]) {
                return state[a]
            }
        }
        return false
    }
    const isWinner = checkWinner()
    const isDraw = checkDraw()
    if (isDraw) {
        return drawGame()
    }
    function drawGame() {

        return (
            <div className="board">
                <h1>Match is Draw</h1>
                <button onClick={() => {
                    setState(Array(9).fill(null))
                }}>Play Again</button> 
            </div>
        )
    }
    function ResetGame() {
            return (
                <div className="board">
                    <h1>{isWinner} is Winner </h1>
                    <button onClick={() => {
                        setState(Array(9).fill(null))
                    }}>Play Again</button>
                </div>
            )
        }
    if (isWinner) {
        return ResetGame()
    }

    return (
        <div className="board">
            <div className="row">
                <Square onClick={() => {
                    handleClick(0)
                }} value={state[0]} />
                <Square onClick={() => {
                    handleClick(1)
                }} value={state[1]} />
                <Square onClick={() => {
                    handleClick(2)
                }} value={state[2]} />
            </div>
            <div className="row">
                <Square onClick={() => {
                    handleClick(3)
                }} value={state[3]} />
                <Square onClick={() => {
                    handleClick(4)
                }} value={state[4]} />
                <Square onClick={() => {
                    handleClick(5)
                }} value={state[5]} />
            </div>
            <div className="row">
                <Square onClick={() => {
                    handleClick(6)
                }} value={state[6]} />
                <Square onClick={() => {
                    handleClick(7)
                }} value={state[7]} />
                <Square onClick={() => {
                    handleClick(8)
                }} value={state[8]} />
            </div>
            
        </div>
    )
}
export default Board;