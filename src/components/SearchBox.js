import React from 'react';


const SearchBox = ({searchField,searcChange}) => {
	return (
		<div className= 'pa2'>
			<input 
			className = 'pa3 ba b--green bg-lightest-blue'
			type= 'search'
			placeholder= 'search robots'
			onChange= {searcChange}
			/>
		</div>
		);
}

export default SearchBox;