import { ActionType } from '../actions'

const Remove = (index) => {
    return {
        type: ActionType.TODO_REMOVE,
        payload: index
    }
}
const Add = (text) => {
    return {
        type: ActionType.TODO_ADD,
        payload: text,
    }
}
const Complete = (index) => {
    return {
        type: ActionType.TODO_COMPLETED,
        payload: index,
    }
}
const Update = (index, text) => {
    return {
        type: ActionType.TODO_UPDATE,
        payload: {
            text: text,
            index: index,
        }
    }
}
const Edit = (index) => {
    return {
        type: ActionType.TODO_EDIT,
        payload: index
    }
}
export { Update, Edit, Remove, Add, Complete }