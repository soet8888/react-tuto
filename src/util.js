const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const calculateWinner = (squares) => {
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

const calculateDraw = (squares) => {
    if (squares.length === squares.filter(v => { return v === null }).length) {
        return squares
    }
    if (squares.filter(v => { return v !== null }).length === squares.length) {
        return null
    }
    return squares
}

export default calculateWinner
export { calculateDraw }
