import React, { Component, PropTypes } from 'react'
import LoadingFullscreen from "../loading-fullscreen"
// import MsgTips from '../MsgTips';
import ImgCards from "../imgCards"
import api from "../../api"
import { connect } from 'react-redux'
import { setMsgTip , hideMsgTip } from "../../store/actions"
//import store from "../../store"
var MyComponent = React.createClass({
    getInitialState() {
        return {
            items: [],
            visiable : true
        }
    },
    componentDidMount() {
        //store.dispatch(setMsgTip('mmmmmm'))
        let { setMsgTip } = this.props
        let getActivity = api.getActivity();
            getActivity.then(result => {
                setTimeout(()=>{
                    this.setState({
                        "visiable" : false
                    })
                    this.setState({
                        "items" : result
                    })
                    // setTimeout(()=>{
                    //     this.setState({
                    //         "items" : []
                    //     })
                    // },5000)
                    setMsgTip('请求成功')
                }, 3000)
            }).catch(error => {
                this.setState({
                    "visiable" : false
                })
                setMsgTip('请求失败')
               console.error(error)
            })

	},
    render: function() {

        return (
            <div>
                <LoadingFullscreen visiable={ this.state.visiable } />
                { this.state.items.length > 0 ? <ImgCards items={ this.state.items } /> : null}
            </div>
        )
    }
})
const App = connect(
  state => ({ state }),
  dispatch => ({
        setMsgTip : (string) => {
            let timer = setTimeout(()=>{
                dispatch(hideMsgTip())
            },3000)
            dispatch(setMsgTip(string,timer))
        }
    })
)(MyComponent)
export default App
