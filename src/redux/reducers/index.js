import todo from './todo'
import game from './game'
import { combineReducers } from 'redux'
const rootReducer = combineReducers({ todo: todo, game: game })
export default rootReducer