import {combineReducers} from 'redux'
import invoice from './invoice'
import withdraw from './withdraw'
import converter from './converter'

const rootReducer = combineReducers({
  invoice,
  withdraw,
  converter
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer