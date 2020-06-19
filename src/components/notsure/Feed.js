import React from 'react'
import FeedItem from './FeedItem'
function Feed({postinfo,icon}) {
	return (
		<div className="pl-3 pr-3"> 
		        <div className="d-flex text-align-start">
		            <button className="btn btn-warning  mb-2 text-white font-weight-bold" data-toggle="modal" data-target="#uploadmusic">Upload Music</button>
		            <button className="btn btn-outline-warning  mb-2 ml-auto font-weight-bold"><i className="fas fa-filter"></i> Filter</button>
		        </div>
		        <FeedItem postinfo={postinfo} icon={icon}/>
		</div>	
	)
}

export default Feed