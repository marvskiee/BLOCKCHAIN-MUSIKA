import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export function NavbarItem({navlinks,toggle}) {

	return (
		navlinks && navlinks.map(({title,icon,link},index) =>
			<li key={title} className="nav-item">
					<Link to={link} className="navItem p-4 navFontSize font-weight-bold text-decoration-none text-light">
						{icon ? <FontAwesomeIcon icon={icon}/> : title}
					</Link>
			</li>
			
		)
	)
}
