import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
class ShowDetails extends Component {

	render(){
		let styles = {
			width : '100%'
		}
		let { src } = this.props.location.query
		if(!src){
			browserHistory.goBack()
			return
		}
		return (
			<div>
				<img style={ styles } src={ location.origin + '/' + src } />
			</div>
		)
	}
}
export default ShowDetails 
// export default connect(
//   state => ({ state }),
//   {}
// )(ShowDetails)
