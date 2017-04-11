import * as types from './mutation-types'

export const setMsgTip = (text,timer) => {
	return {
	  type: types.SET_MSGTIP,
	  text,
	  timer
	}
}

export const hideMsgTip = () => ({
  type: types.HIDE_MSGTIP
})
