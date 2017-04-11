import React from 'react'
import Index from '../components/App'
import ShowDetails from '../components/showDetails';
import { connect } from 'react-redux'
import MsgTips from '../components/MsgTips';

let App = React.createClass({
    render() {
      const { msgTip } = this.props
        return (
          <div>
              {this.props.children}
              <MsgTips msgTip={ msgTip } />
          </div>
        )
    }
})

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
const mapStateToProps = state => {
  return {
    msgTip: state.msgTip
}
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
const mapDispatchToProps = dispatch => ({
    setMsgTip : (string) => {
        let timer = setTimeout(()=>{
            dispatch(hideMsgTip())
        },3000)
        dispatch(setMsgTip(string,timer))
    }
})

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

const routes = {
  path: '/',
  component: App,
  indexRoute : {component: Index},
  childRoutes: [
  	{ path: 'index' , component: Index},
    { path: 'details' , component: ShowDetails}
  ]
}
export default routes
