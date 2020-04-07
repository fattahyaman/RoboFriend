import React from 'react';

const Scroll = (props) => {
	return(
		<div style= {{overflowY: 'scroll', border: '4px solid red', height: '600px'}}>
			{props.children}
		</div>
		);
}
export default Scroll;