import React from 'react';

class StorePicker extends React.Component{
	render() {
		return (
			<form  className="store-selector">
			<h2>Plese enter store</h2>
			<input type="text" placeholder="Store name"/>
			<button type="submit">Visit</button>
			</form>
		)
	}
}

export default StorePicker;
