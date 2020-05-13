import { ActionType } from '../actions'

const initState = {
    history: [
        {
            squares: Array(9).fill(null)
        }
    ],
    jumpSquare: { index: null, squares: null },
    stepNumber: 0,
    xIsNext: true
}
const game = (state = initState, action) => {
    switch (action.type) {
        case ActionType.GAME_MOVE:
            const history = state.history.slice(0, state.stepNumber + 1)
            const current = history[history.length - 1]
            const squares = current.squares.slice()
            squares[action.payload.index] = state.xIsNext ? 'X' : 'O'
            const newState = {
                ...state,
                history: history.concat([{ squares: squares }]),
                xIsNext: !state.xIsNext,
                stepNumber: state.history.length
            }
            return newState
        case ActionType.GAME_HISTORY_JUMP:
            return { ...state, jumpSquare: { index: action.payload, squares: state.history[action.payload].squares } }
        default:
            return state
    }
}

export default game
