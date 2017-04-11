import React from 'react'
import { hashHistory , Link } from 'react-router'
require('./index.scss')
let ImgCards = React.createClass({
	getInitialState(){
		let items = _.cloneDeep(this.props.items)
		return {
			"items" : items
		}
	},
  	handleClick(src){
  		hashHistory.push({
		  pathname: 'details',
		  query: { 
		  	isLink: false,
		  	src : src
		  }
		})
  	},
  	imgloaded (e){
  		let _index = e.target.getAttribute('data-index')
  		let _items = _.cloneDeep(this.state.items)
  		_items[_index].smaloaded = true
  		this.setState({
			"items" : _items
		})
  	},
  	componentWillUnmount(){
  		console.log("我被销毁了")
  	},
	render() {
		let _w = $(window).width()
		let _this = this;
		let _data = _this.state.items;
		let _item = _data.map(function(val,key){
			let _ar = [];
			try{
				_ar = val.res.split(',')
			}catch(e){
			}
			let _height = "50"
			if(val.smaloaded){
				_height = "auto"
			}else{
				if(_ar.length == 2){
					_height = parseInt(_w / (_ar[0] / _ar[1]) / 1)
				}
			}
			let ref = "img"+key
			let spanStyle = val.smaloaded ? {"display" : "none"} : {} 
			return (
				<div className="loadwarp" style={{ height : _height }}>
					<span className="mq-loadimg loader" style={ spanStyle } ></span>
					{
						val.isLink 
					? 
						<img 
							ref={ref}
							className="prodimg"
							src={ val.smaloaded ? val.osrc : val.rsrc }
							data-index={ key }
							onLoad = { val.smaloaded ? null : _this.imgloaded.bind(this) }
							onClick= { _this.handleClick.bind( this, val.smaloaded ? val.osrc : val.rsrc) }
						/> 
					:
						<Link to={{ pathname: 'details', query: { isLink: true , src : val.smaloaded ? val.osrc : val.rsrc } }} >
							<img 
								ref={ref}
								className="prodimg"
								src={ val.smaloaded ? val.osrc : val.rsrc }
								data-index={ key }
								onLoad = { val.smaloaded ? null : _this.imgloaded.bind(this) }
							/>
						</Link>
					}
					
				</div>
	        )
		})

        return (
        	<div>
        		{ _item }
        	</div>
        )
    }
})
export default ImgCards
