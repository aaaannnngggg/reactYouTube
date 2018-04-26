import _ from 'lodash';
import React, {Component} from 'react'; 
import ReactDOM from 'react-dom'; 
import SearchBar from './components/search_bar'; 
import VideoList from './components/video_list'; 
import VideoDetails from './components/video_detail';
import YTSearch from 'youtube-api-search'; 

const API_KEY = 'AIzaSyCjwywInmc_O7cdjCCqn6jDUx8B-XZZ4HM'; 	



class App extends Component {
	constructor(props) {
		super(props); 
		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('rolex hulk vs batman');
	}

	videoSearch(term) {
		YTSearch ({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos : videos, 
				selectedVideo : videos[0]
			});  
		});
	}
	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300); 
		return ( 
			<div> 
				<SearchBar videoSearch = {videoSearch}/>
				<VideoDetails video = {this.state.selectedVideo}/>
				<VideoList 
					onVideoClick = {(video) => {
						this.setState({selectedVideo: video})
					}} 
					videos = {this.state.videos} 
				/>
			</div>


		);
	}
}
				// <SearchBar videoSearch = {this.videoSearch}/>
//				<SearchBar videoSearch = {(term) => {this.videoSearch(term)}}/>

ReactDOM.render(<App />, document.querySelector('.container')); 