import React, { Component } from 'react'
require("./index.scss")
class MsgTips extends Component {
	render(){
		const { msgTip } = this.props
		const style = !msgTip.show ? "msg-tip msg-tip-leave" : 'msg-tip' 
		return (
			<div className={ style }>
				<span className="msg-tip__text">{ msgTip.text }</span>
			</div>
		)
	}
}
 

// const MsgTips = React.createClass({
// 	render(){
// 		const { msgTip } = this.props
// 		const style = !msgTip.show ? "msg-tip msg-tip-leave" : 'msg-tip' 
// 		return (
// 			<div className={ style }>
// 				<span className="msg-tip__text">{ msgTip.text }</span>
// 			</div>
// 		)
// 	}
// })

// const MsgTips = ({ msgTip }) => {
// 	const style = !msgTip.show ? "msg-tip msg-tip-leave" : 'msg-tip' 
// 	return (
// 		<div className={ style }>
// 			<span className="msg-tip__text">{ msgTip.text }</span>
// 		</div>
// 	)
// }

export default MsgTips
