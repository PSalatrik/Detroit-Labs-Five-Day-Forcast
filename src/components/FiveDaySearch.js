import React from 'react';

class FiveDaySearch extends React.Component {

	state = { city: '' };

	onCitySubmit = (event) => {
		this.setState({city: event.target.value});
		//console.log(this.state.city)
	}

	onFormSubmit = (event) =>{
		event.preventDefault();
		this.props.onFiveDaySubmit(this.state.city)
	}

	render(){
		return (
			<div>
			 <form onSubmit={this.onFormSubmit}>
			  <label>Enter your City?</label>
			   <input value={this.state.city} type="text" onChange={this.onCitySubmit} />
			 </form>
			</div>
			)
	}
};

export default FiveDaySearch;