import React from 'react';
import SearchBar from './SearchBar';
import FiveDaySearch from './FiveDaySearch';
import FiveDayList from './FiveDayList';
import weatherapi from '../apis/weatherapi';
import { BrowserRouter, Route, Link } from "react-router-dom";

//Navigation to Five Day or return Home
const Home = () => {
	return <div><Link to="/five-day">Get Your Five Day Forcast</Link> </div>
}

const FiveDayForcast = () => {
	return <div><Link to="/">Home</Link></div>
}

//Main Application Component
class App extends React.Component {

	state = { temp: "", days: [] };
	//API for Single Day Temp
	onLocationSubmit = async (city, days) => {
		const response = await weatherapi.get('/data/2.5/weather', {
			params: { 
				q: city, 
				appid: "8cff60e1aa74042a5d2aaf50526965b4",
				units: 'imperial'
				 }
		});
		this.setState({temp: response.data.main.temp})
	}
	//API Call for Five Day Temp
	onFiveDaySubmit = async(city) =>{
		const response = await weatherapi.get('/data/2.5/forecast', {
			params: {
				q: city,
				appid: "8cff60e1aa74042a5d2aaf50526965b4",
				units: 'imperial',
			}
		});
		this.setState({days:response.data.list});
		console.log(this.state.days);
	}

	render() {
		return(
		 <div>
			<BrowserRouter>
				<div>
				 <Route path="/" exact component={Home} />
				 <Route path="/five-day" component={FiveDayForcast} />
				</div>
			</BrowserRouter>
			<SearchBar onLocationSubmit={this.onLocationSubmit} />
			<div>{this.state.temp}</div>
			<FiveDaySearch onFiveDaySubmit={this.onFiveDaySubmit} />
			<FiveDayList allDays={this.state.days} />
		 </div>
		)
	}
		
}

export default App;

//			<FiveDayList allDays={this.state.days} />


