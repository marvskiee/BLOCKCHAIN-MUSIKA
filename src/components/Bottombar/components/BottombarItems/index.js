import React from 'react';
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const BottombarItems = ({bottomlink}) => {
  return (
  		bottomlink && bottomlink.map(({title,icon,link},index) =>
			<Link setactive="red" to={link} key ={title} className="d-flex flex-fill flex-column align-items-center p-3  text-light text-decoration-none font-weight-bold">
				<FontAwesomeIcon icon={icon}/>
				<span >{title}</span>
			</Link>
		)
    )
}