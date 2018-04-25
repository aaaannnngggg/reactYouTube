import React, {Component} from 'react'; 
import ReactDOM from 'react-dom'; 
import SearchBar from './components/search_bar'; 
import YTSearch from 'youtube-api-search'; 

const API_KEY = 'AIzaSyCjwywInmc_O7cdjCCqn6jDUx8B-XZZ4HM'; 	



class App extends Component {
	constructor(props) {
		super(props); 
		this.state = {
			videos: []
		};

		YTSearch ({key: API_KEY, term:"rolex"}, (videos) => {
			this.setState({videos : videos});  
		});
	}
	render() {
		return ( 
			<div> <SearchBar /></div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container')); 