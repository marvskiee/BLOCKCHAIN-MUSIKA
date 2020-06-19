import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Feed({postinfo,icon}) {
	const {fap,com,lis,don,cart,more} = icon;
	return (
		postinfo && postinfo.map(({songtitle,username,duration,count_favorite,count_commented,count_listened},index)=>
			icon.map(({fap,com,lis,more,don,cart},index)=>
			<div className="card mb-2"> 
				<div className="card-body p-1">
				    <div className="d-flex "> 
				    	<div className="p-2 bg-dark">
					        <img className=" m-1 rounded" src="../pics/mm2.jpg" style={{height: '90px',width: '90px'}} />
					    </div>
					    <div className="d-flex align-items-center p-0">
					        <div className="d-flex align-items-start flex-column col-12 p-0">
					           	<div className="font-weight-bold col-12 text-truncate" style={{fontSize: '18pt'}}>{songtitle}</div>
					           	<div className="font-weight-regular col-12 text-truncate">{username}</div>
					            <div className="font-weight-regular col-12 text-truncate">Duration: {duration}</div>  
					        	<div className="font-weight-bold d-flex col-12 text-truncate">
						            <div className="p-1">{count_favorite} <FontAwesomeIcon icon={fap}/></div>
						            <div className="p-1" data-toggle="modal" data-target="#comments">{count_commented} <FontAwesomeIcon icon={com}/></div>
						            <div className="p-1">{count_listened} <FontAwesomeIcon icon={lis}/></div>
					            </div>  
					        </div>  
					    </div>
					    <div className=" ml-auto mr-2 justify-content-center d-flex flex-column">
					        <button className="p-1 bg-white border-0" data-toggle="modal" data-target="#sendtips"><FontAwesomeIcon icon={don}/></button>
					        <button className="p-1 bg-white border-0" data-toggle="modal" data-target="#addtocart"><FontAwesomeIcon icon={cart}/></button>
					        <button className="p-1 bg-white border-0" data-toggle="modal" data-target="#more"><FontAwesomeIcon icon={more}/></button>
						</div>
					</div>
				</div> 
			</div>
			)
		)
	)
}

export default Feed