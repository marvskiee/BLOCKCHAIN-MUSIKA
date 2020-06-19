import React from 'react'
import {MenubarItem} from 'components/Menubar/components/MenubarItem'
import 'components/Menubar/index.css'
export const Menubar = ({menulinks}) => {
	
	return (
		<div className="sticky-top mb-1 customMenubar " style={{top:"89px",zIndex:"0"}} > 
            <div className="d-flex ">
            	<MenubarItem menulink = {menulinks}/>
            </div>    
        </div>

	)
}