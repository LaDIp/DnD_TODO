import { createStore, combineReducers } from "redux";
import { boardReducer } from './boardReducer' 


// const rootReducer = combineReducers({
//   board: boardReducer
// })

export const store = createStore(boardReducer)