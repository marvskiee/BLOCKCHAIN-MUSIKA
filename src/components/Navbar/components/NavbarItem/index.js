import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export function NavbarItem({navlinks,toggle}) {

	return (
		navlinks && navlinks.map(({title,icon,anchor},index) =>
			<li key={title} className="nav-item">
					<Link 
						to={anchor} 
						spy="true"
						smooth={true}
						offset={-70}
						duration= {500}
						 className="navItem p-4 navFontSize font-weight-bold text-decoration-none text-light">
						{icon ? <FontAwesomeIcon icon={icon}/> : title}
					</Link>
			</li>
			
		)
	)
}
