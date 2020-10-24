import {combineReducers} from 'redux'
import invoice from "./invoice"

const rootReducer = combineReducers({
  invoice,
});

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;