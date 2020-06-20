import React from 'react';
import {Navbar} from 'components/Navbar';
import {Sidebar} from 'components/Sidebar';
import {Menubar} from 'components/Menubar';
import {Bottombar} from 'components/Bottombar';

import 
	{
		faEllipsisH,
		faHandHoldingUsd,
		faHeart,
		faComment,
		faHeadphonesAlt, 
		faAlignRight, 
		faSearch, 
		faShoppingCart, 
		faWallet, 
		faHeadphones, 
		faCompactDisc, 
		faBell, 
		faUser } from '@fortawesome/free-solid-svg-icons';

import 
	{
		Wallet,
		Cart,
		Feed, 
		LiveStream, 
		SongMart, 
		SavedPlaylist, 
		Collection,
		Notification,
		Account
	} from 'components/Section';

import 
	{
		BrowserRouter as Router, 
		Route, 
		Switch, 
		Link, 
		Redirect 
	} from 'react-router-dom';

export class Main extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			userinfo:{
				username:"Marvs",
				name:"Marvi Negrete",
				profilepic: "head1.jpg"
			}
		};
	}

	render(){
		const {pathname} = this.props.location;
		const page = pathname;
		const ExploreLinks = [
			{
				title: "Feed",
				link: "/user/feed" 

			},
			{
				title: "Live Stream",
				link: "/user/stream"
			},
			{
				title: "Song Mart",
				link: "/user/mart"
			},
		];
		const LibraryLinks = [
			{
				title: "SavedPlayList",
				link: "/user/saved"
			},
			{
				title: "Collection",
				link: "/user/collection"
			}
		];

		const navBarLinks = [
			
			{
				title:"Search",
				icon:faSearch,
				link:"/user/search"
			},
			{
				title:"Wallet",
				icon:faWallet,
				link:"/user/wallet"
			},
			{
				title:"Cart",
				icon:faShoppingCart,
				link:"/user/cart"
			},

		];
		const sideBarLinks = [
		{
			title:"Explore",
			icon:faHeadphones,
			link:"/user/feed"
		},
		{
			title:"Library",
			icon:faCompactDisc,
			link:"/user/saved"

		},
		{
			title:"Notification",
			icon:faBell,
			link:"/user/notification"
		},
		{
			title:"Account",
			icon:faUser,
			link:"/user/account"
		}
		];
		const feedIcon=[
		{
			fap:faHeart,
			com:faComment,
			lis:faHeadphonesAlt,
			don:faHandHoldingUsd,
			cart:faShoppingCart,
			more:faEllipsisH

		}
		]
		const feedPost = [
		{
			songtitle :"Dark Horse",
			username: "@katyperry",
			duration: "2:10",
			count_favorite:50,
			count_commented:32,
			count_listened:24,
			song_pic:"song3dualipa.jpg"

		},
		{
			songtitle :"Hangover",
			username: "@psymoto",
			duration: "3:05",
			count_favorite:500,
			count_commented:234,
			count_listened:469,
			song_pic:"song6katy.jpg"

		}
		]

		let currentPage
		if(page=="/user/feed"){
			currentPage = ( 
				<>
					<Menubar menulinks={ExploreLinks}/>
					<Feed icon={feedIcon} postinfo={feedPost}/>
				</>
			)
		}else if(page=="/user/stream"){
			currentPage = ( 
				<>
					<Menubar menulinks={ExploreLinks}/>
					<LiveStream/>
				</>
			)
		}else if(page=="/user/mart"){
			currentPage = ( 
				<>
					<Menubar menulinks={ExploreLinks}/>
					<SongMart/>
				</>
			)
		}else if(page=="/user/saved"){
			currentPage = ( 
				<>
					<Menubar menulinks={LibraryLinks}/>
					<SavedPlaylist icon={feedIcon} postinfo={feedPost}/>
				</>
			)
		}else if(page=="/user/collection"){
			currentPage = ( 
				<>
					<Menubar menulinks={LibraryLinks}/>
					<Collection/>
				</>
			)
		}else if(page==="/user/notification"){
			currentPage = ( 
				<>
					<Notification/>
				</>
			)
		}else if(page=="/user/account"){
			currentPage = ( 
				<>
					<Account userinfo={this.state.userinfo}/>
				</>
			)
		}
		return (
			<div className="primaryColor">
				<Navbar toggle={faAlignRight} navlinks={navBarLinks}/>
				<div className="container-fluid" id="fixedbar-problem"> 
	        		<div className="row row-margin"> 
	   					<Sidebar sidelinks={sideBarLinks} userinfo={this.state.userinfo}/>
	    				<div className="col-md-8 col-lg-9 pr-0 pl-0 pt-1">
	    					
	    					{currentPage}

						</div>
		        	</div>	
		    	</div>
		    	<Bottombar bottomlinks={sideBarLinks} />
			</div>
		)
	}
}

