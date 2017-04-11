import { combineReducers } from 'redux'
import { msgTip } from './modules/msgTip'
import { loadingFull } from './modules/loadingFull'

export default combineReducers({
  msgTip,
  loadingFull
})
