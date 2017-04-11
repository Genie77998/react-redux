import React from 'react'
require("./index.scss")

const LoadingFullscreen = ({ visiable }) => {
	let _visiable = visiable ? "block" : "none";
	return (
		<div style={{display: _visiable}} className="loading--fullscreen"><div className="box"><h3><span></span></h3></div></div>
	)
}
export default LoadingFullscreen
