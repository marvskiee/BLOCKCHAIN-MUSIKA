import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTv,faLock,faUserFriends,faMusic} from '@fortawesome/free-solid-svg-icons'
export const Feature = () => {
	const features = [
		{
			title:"User Friendly",
			description:"We provide a better experience for our user and detailed service",
			icon: faUserFriends
		},
		{
			title:"Promote Songs",
			description:"We provide a better experience for our user and detailed service",
			icon: faMusic
		},
		{
			title:"Live Stream",
			description:"We provide a better experience for our user and detailed service",
			icon:faTv
		},
		{
			title:"Security",
			description:"We provide a better experience for our user and detailed service",
			icon:faLock
		}
	]
	return (
		features && features.map(({title,description,icon},index) =>
			<div className="col-lg-3 col-sm-6">
			    <div className="card m-2">   
			        <div className="card-header border-top m-2 border-warning text-center" style={{backgroundColor: "#101820ff"}}>
			            <div className="d-flex justify-content-center ">
			            	<div className="iconFrame rounded-circle bg-warning">
			            		<FontAwesomeIcon icon={icon} className="text-center featureIcon"/>
			            	</div>
			            </div>
			            <p className="font-weight-bold text-light pt-2 navFontSize">{title}</p>
			        </div>
			        <div className="card-body">
			            <p className="text-center">{description}</p>
			        </div>
			    </div>
			</div>
		)
	)
}
