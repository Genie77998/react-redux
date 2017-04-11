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

export const showLoading = () => ({
  type: types.SHOW_LOADING
})

export const hideLoading = () => ({
  type: types.HIDE_LOADING
})
