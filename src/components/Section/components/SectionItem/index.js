import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
export const FlexFillCardItem = ({postinfos,icon}) => {
	const {fap,com,lis,don,cart,more} = icon;
	return (
		postinfos && postinfos.map(({songtitle,username,duration,count_favorite,count_commented,count_listened,song_pic},index)=>
			icon.map(({fap,com,lis,more,don,cart},index)=>
			<div key= {index} className="card mb-2"> 
				<div className="card-body p-1">
				    <div className="d-flex "> 
				    	<img alt="song pic" className=" m-1 h-100 rounded" src={require(`assets/pics/${song_pic}`)} style={{height: '90px',width: '90px'}} />
					    
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
export const LiveStreamItem = () => {
	return (
		<div className="container-fluid ">
            <div className="row">
                <div className="p-1 col-lg-4 col-6 col-md-4 col-sm-6 col-xl-3" >
                    <div className="card">
                    	<div className="card-body p-0">
                            <img alt="Stream Thumbnail" src={require("assets/pics/mm1.jpg")} className="rounded-top img-fluid"/>
                            <div className="text-truncate font-weight-bold pl-1 pr-1 pb-1">
                            	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>        
                           	<div className="text-truncate pl-1 pr-1 pb-1">Lexi Lore</div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>

	)

} 
export const ColumnCardItem = () => {
	return (
		<div className="container-fluid">
            <div className="row"> 
                <div className="p-1 col-6 col-md-3 col-xl-3 col-sm-4"> 
                    <div className="card border-0 "> 
                        <div className="card-body p-0"> 
                            <img alt="songpic" src={require("assets/pics/song3dualipa.jpg")} className="rounded img-fluid"/>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
	)
}
export const NotificationItem = () => {
	return(
        <div className="d-flex p-2 bg-light rounded ">
            <img src={require("assets/pics/mm3.jpg")} className="rounded-circle" style={{height: "50px",width: "50px"}}/> 
            <div className="mt-auto mb-auto ml-2 d-flex flex-column">
                <div className="p-1" > 
                    <label className="font-weight-bold">Katy Perry</label>
                    <label className="font-weight-light">Fap your Song "What does the fox says"</label>
                </div>
            </div>
        </div>
	)
}
