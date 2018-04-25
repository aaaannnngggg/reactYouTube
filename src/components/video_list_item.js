import React from "react"; 

const VideoListItem = ({video, onVideoClick}) =>{
	const imgURL = video.snippet.thumbnails.default.url; 
	return (
		<li onClick = {() => onVideoClick(video)} className = 'list-group-item'> 
			<div className = 'video-list media'>
				<div className ='media-left'>
					<img classNmae ='media-object' src = {imgURL} />
				</div>

				<div className='media-body'>
    				<div className='media-heading'> {video.snippet.title}  </div>
  				</div>
			</div>
		</li>
	);
   
}; 

export default VideoListItem; 