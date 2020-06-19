import React from 'react'
import {Link} from 'react-router-dom'
export const MenubarItem = ({menulink}) =>{
	return (
		menulink && menulink.map(({title,link},index) =>
			<Link to={link} key={index} className="flex-fill text-center customMenubarFont text-light text-decoration-none font-weight-bold pt-2 pb-2 ">
				{title}
			</Link>
      	)
	)
}
