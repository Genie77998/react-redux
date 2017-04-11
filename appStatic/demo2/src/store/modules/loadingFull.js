import { SHOW_LOADING , HIDE_LOADING } from '../mutation-types'

const loadingState = {
   visiable : false
}

const loadingFull = function(state, action) {
    if (typeof state === 'undefined') {
        return loadingState
    }
    switch (action.type) {
        case SHOW_LOADING :
            return {
                visiable : true
            }
            break;
        case HIDE_LOADING :
            return {
                visiable : false
            }
            break;
        default:
            return state;
    }
}



export {
    loadingFull
}
