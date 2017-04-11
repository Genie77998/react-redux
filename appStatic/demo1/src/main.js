import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { browserHistory , Router } from 'react-router'
//import App from "./components/App"
import routes from "./router"
import { createStore } from 'redux'
import store from "./store"
import DevTools from "./devtools"
require("./scss/common")
const init = function() {
    window.addEventListener('load', function() {
        FastClick.attach(document.body)
    }, false)
    var app = document.getElementById('app')

    //Provider干的事：接收store，并将store传到子组件中，当store发生变化时，更新store；所以子组件具有store的dispatch方法。
    render( 
    	<Provider store={store}>
            <div>
              <Router routes={routes} history={browserHistory} />
              <DevTools />
            </div>
  		</Provider>,
        app
    )
}
init()
