import React from 'react'
import {SidebarItem} from 'components/Sidebar/components/SidebarItem'
import 'components/Sidebar/index.css'

export const Sidebar = ({sidelinks,userinfo}) =>{
	const {name,username,profilepic} = userinfo
	return (
		<div className="col-md-4 col-lg-3 pl-0 pr-0 text-light border-dark border-right customCollapse" >
	    	<div className="d-flex align-items-start flex-column sticky-top" style={{top:'81px',height: 'calc(100vh - 81px)'}}>
	    		<div className="d-flex align-items-center p-3">
	    			<img alt="profile" src={require(`assets/pics/${profilepic}`)} className="rounded" style={{height: '80px',width: '80px'}}/>
		    		<div className="d-flex align-items-start flex-column col-9 p-0">
		    			<div className="font-weight-bold col-12 text-truncate">{name}</div>	
		   				<div className="font-weight-bold col-12 text-truncate">{username}</div>	
		    		</div>	
	    		</div>
	   		
	    		<div className="mt-2" style={{}}>
	    			<ul className="navbar-nav ml-auto float-right">
						<SidebarItem sidelink={sidelinks}/>
					</ul>
	    		</div>
		    	<div className=" d-flex flex-column mt-auto" style={{width: '100%'}}> 
		    		<div className="d-block  mb-3 text-center"><button style={{width: '150px'}} className="pt-2 pb-2 btn rounded-pill btn-outline-warning font-weight-bold">Logout</button></div>
		   			<div className="text-center"><a href="../user/feedback.php" className="text-decoration-none text-light">Send us a Message</a></div>
		   		</div>
	   		</div>
    	</div>
	)
}