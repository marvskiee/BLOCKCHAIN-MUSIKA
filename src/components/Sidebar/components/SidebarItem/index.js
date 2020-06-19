import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const SidebarItem = ({sidelink}) =>{
	return (
		sidelink && sidelink.map(({title,icon,link},index) =>
			<Link setactive="red" to={link} key ={title} className="d-block text-light text-decoration-none pt-3 pb-2 pl-5 font-weight-bold">
				<FontAwesomeIcon icon={icon}/>
				<span className="ml-2">{title}</span>
			</Link>
		)
	)
}
