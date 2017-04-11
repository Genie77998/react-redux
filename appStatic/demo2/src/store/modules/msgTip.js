import { SET_MSGTIP , HIDE_MSGTIP } from '../mutation-types'

const msgTipInit = {
    text: '',
    show: false,
    timer : 0
}

const msgTip = function(state, action) {
    if(state && typeof state.timer != "undefined" && action && action.type == SET_MSGTIP){
        clearTimeout(state.timer)
    }
    if (typeof state === 'undefined') {
        return msgTipInit
    }
    switch (action.type) {
        case SET_MSGTIP :
            if(action.text){
                return {
                    text: action.text,
                    show: true,
                    timer : action.timer
                }
            }else{
                return msgTipInit;
            }
            break;
        case HIDE_MSGTIP :
            return {
                show: false
            }
            break;
        default:
            return state;
    }
}



export {
    msgTip
}
