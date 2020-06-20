import React,{useState} from 'react';
import {Template} from 'components/Modals/components/Template'

export const DownloadApp = ({shown,children}) => {
	const title = "Hey you Living Creature";
	const body = "Thank you for support. But we havent launch the app on Playstore or AppStore as of now. ";
	return (
	  	<Template shown = {shown} title = {title} body = {body} size="md">
	   		{children}
	   	</Template>
	)
}
export const FeedUpload = ({children,show}) => {
	const title = "Feeder";
	const body = "Thank you for support. But we havent launch the app on Playstore or AppStore as of now. ";
	return (
	<div>
		<Template shown ={show} title = {title} body = {body}>
	   		{children}
	   	</Template>
	
	</div>
	 
	)
}
export const StreamStart = ({show,children}) => {
	const title = "Stream";
	const body = "Thank you for support. But we havent launch the app on Playstore or AppStore as of now. ";
	return (
	  	<Template shown = {show} title = {title} body = {body}>
	   		{children}
	   	</Template>
	)
}
export const MartPromote = ({show,children}) => {
	const title = "MartPromote";
	const body = "Thank you for support. But we havent launch the app on Playstore or AppStore as of now. ";
	return (
	  	<Template shown = {show} title = {title} body = {body}>
	   		{children}
	   	</Template>
	)
}
export const Search = ({show,children}) => {
	const title = "Search";
	const body = "Thank you for support. But we havent launch the app on Playstore or AppStore as of now. ";
	return (
	  	<Template shown = {show} title = {title} body = {body}>
	   		{children}
	   	</Template>
	)
}





export const Filter = ({show,children}) => {
	const title = "Filter";
	const body = "Thank you for support. But we havent launch the app on Playstore or AppStore as of now. ";
	return (
	  	<Template shown = {show} title = {title} body = {body}>
	   		{children}
	   	</Template>
	)
}


