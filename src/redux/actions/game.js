import { ActionType } from '../actions'

const gameMove = (index) => {
    return {
        type: ActionType.GAME_MOVE,
        payload: { index }
    }
}
const gameHistoryJumpTo = (historyId) => {
    return {
        type: ActionType.GAME_HISTORY_JUMP,
        payload: historyId
    }
}
export { gameMove, gameHistoryJumpTo }