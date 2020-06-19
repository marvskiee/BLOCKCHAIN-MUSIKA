import React from 'react'
import {NavbarItem}  from 'components/Navbar/components/NavbarItem'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useState} from 'react'

import 'components/Navbar/components/NavbarItem/index.css'
export const Navbar = ({navlinks,toggle}) => {
	const [toggleState,setToggleState] = useState(false)
	
	const toggleHandler = () =>{
		setToggleState(!toggleState)
	}
	//console.log(toggleState)
	
	let navtoggle=""
	if(toggleState){
		navtoggle = (<NavbarItem navlinks={navlinks}/>)
	}
	const navItem = () => {
		return navtoggle
	}
	return (
		<>
		<nav className="navbar navbar-expand-md sticky-top primaryColor">
		      	<span  className="font-weight-bold navbar-text text-warning brandFontSize" >Musika</span>
		      	<button className="navbar-toggler " data-toggle="collapse" data-target="#collapse_target">
	    			<FontAwesomeIcon className="text-light brandFontSize" onClick={() => toggleHandler()} icon={toggle}/>
	    		</button>
	    		<div className="navbar-collapse collapse" id="collapse_target">
					<ul className="navbar-nav ml-auto float-right">
						<NavbarItem navlinks={navlinks} toggle={toggleState}/>
					</ul>
				</div>
	    </nav>
	    <div className="navItemCollapse">
	    	<ul>
	    		{navItem()}
	    	</ul>
	    </div>
		</>
	)
}