import { ActionType } from "../actions";
const toDoinit = [
    { text: "todo1", isCompleted: false, isEdit: false },
    { text: "todo2", isCompleted: false, isEdit: false },
]
const toDO = (state = toDoinit, action) => {
    switch (action.type) {
        case ActionType.TODO_ADD:
            return [...state, { text: action.payload, isCompleted: false, isEdit: false }]
        case ActionType.TODO_REMOVE:
            var newState = [...state];
            newState.splice(action.payload, 1)
            return newState;
        case ActionType.TODO_COMPLETED:
            var newTodos = [...state];
            newTodos[action.payload].isCompleted = true
            return newTodos;
        case ActionType.TODO_UPDATE:
            var newUpdates = [...state]
            newUpdates[action.payload.index].text = action.payload.text
            newUpdates[action.payload.index].isEdit = false
            return newUpdates;
        case ActionType.TODO_EDIT:
            var newEdits = [...state];
            newEdits[action.payload].isEdit = true
            return newEdits
        default:
            return state;
    }
}
export default toDO;