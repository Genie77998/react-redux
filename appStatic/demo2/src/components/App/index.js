import React, { Component, PropTypes } from 'react'
import LoadingFullscreen from "../loading-fullscreen"
// import MsgTips from '../MsgTips';
import ImgCards from "../imgCards"
import api from "../../api"
import { connect } from 'react-redux'
import { setMsgTip , hideMsgTip , showLoading , hideLoading } from "../../store/actions"
//import store from "../../store"
var MyComponent = React.createClass({
    getInitialState() {
        let { showLoading } = this.props
        showLoading()
        return {
            items: [],
            visiable : true
        }
    },
    logs(){
        console.log(this.refs.imgCards.refs.img0);
        console.log(this.refs);
    },
    componentDidMount() {
        //store.dispatch(setMsgTip('mmmmmm'))
        let { setMsgTip , hideLoading} = this.props
        let getActivity = api.getActivity();
            getActivity.then(result => {
                setTimeout(()=>{
                    this.setState({
                        "visiable" : false
                    })
                    this.setState({
                        "items" : result
                    })
                    this.logs()
                    // setTimeout(()=>{
                    //     this.setState({
                    //         "items" : []
                    //     })
                    // },5000)
                    setMsgTip('请求成功')
                    hideLoading()
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
                <LoadingFullscreen visiable={ this.state.visiable } ref="loading" />
                { this.state.items.length > 0 ? <ImgCards ref="imgCards" items={ this.state.items } /> : null}
            </div>            
        )
    }
})
const App = connect(
  state => ({ state }),
  dispatch => ({
        setMsgTip : (string) => {
            let timer = setTimeout(()=>{
                console.log(1111);
                dispatch(hideMsgTip())
            },3000)
            dispatch(setMsgTip(string,timer))
        },
        showLoading : () => {
            dispatch(showLoading())
        },
        hideLoading : () => {
            dispatch(hideLoading())
        }
    })
)(MyComponent)
export default App
