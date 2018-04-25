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

		YTSearch ({key: API_KEY, term:"messi"}, (videos) => {
			this.setState({
				videos : videos, 
				selectedVideo : videos[0]
			});  
		});
	}
	render() {
		return ( 
			<div> 
				<SearchBar />
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
//				<VideoDetails video = {this.state.videos[0]}/>

ReactDOM.render(<App />, document.querySelector('.container')); 