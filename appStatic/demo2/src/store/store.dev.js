import React from 'react'
import reduxer from './redux'
import { createStore, applyMiddleware, compose } from 'redux';
import DevTools from '../devtools';

const enhancer = compose(
    DevTools.instrument()
);


const store = createStore(reduxer, enhancer)
if (module.hot) {//热加载加速
	module.hot.accept('./redux', () =>
	  store.replaceReducer(require('./redux'))
	)
}
export {
	store
}
