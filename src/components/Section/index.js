import React from 'react'
import {Button}  from 'react-bootstrap'
import 
	{
		FeedUpload,
		Filter,
		StreamStart,
		MartPromote,
		Search } from 'components/Modals';
import 
	{
		FlexFillCardItem, 
		LiveStreamItem, 
		SavedPlaylistItem, 
		ColumnCardItem,
		NotificationItem
	} from 'components/Section/components/SectionItem'
import 'components/Section/index.css'
export class Feed extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			feedModals:false,
			filterModals:false
		}
		
		const {postinfo,icon} = props;
		this.postinfo = postinfo;
		this.icon = icon;
		
	}
	feedModalHandlerShow = () =>{
		this.setState({
			feedModals:true
		});
	}
	feedModalHandlerClose = () =>{
		this.setState({
			feedModals:false
		});
	}
	filterModalHandlerShow = () =>{
		this.setState({
			filterModals:true
		});
	}
	filterModalHandlerClose = () =>{
		this.setState({
			filterModals:false
		});
	}

	render() {
		return (
			<div className="pl-3 pr-3 customSection"> 
			    <div className="d-flex text-align-start">
			        <button onClick={this.feedModalHandlerShow} className="btn btn-warning  mb-2 text-white font-weight-bold" data-toggle="modal" data-target="#uploadmusic">Upload Music</button>
			        <button onClick={this.filterModalHandlerShow} className="btn btn-outline-warning  mb-2 ml-auto font-weight-bold"><i className="fas fa-filter"></i> Filter</button>
			    </div>
			    <Filter show={this.state.filterModals}>
                	<Button variant="warning" onClick={this.filterModalHandlerClose}>
			            Post
			        </Button>
                </Filter>
			    <FeedUpload show={this.state.feedModals}>
			    	<Button variant="warning" onClick={this.feedModalHandlerClose}>
			            Post
			        </Button>
			    </FeedUpload>
			    <FlexFillCardItem postinfos={this.postinfo} icon={this.icon}/>
			    
			</div>
		)
	}
}
export class LiveStream extends React.Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 streamModals:false,
			 filterModals:false
		}

	}
	streamModalHandlerClose = () =>{
		this.setState({
			streamModals:false
		})
	}
	streamModalHandlerShow = () =>{
		this.setState({
			streamModals:true
		})
	}
	filterModalHandlerClose = () =>{
		this.setState({
			filterModals:false
		})
	}
	filterModalHandlerShow = () =>{
		this.setState({
			filterModals:true
		})
	}


 	render() {
		return(		
			<div className="pr-3 pl-3 customSection">
                <div className="d-flex text-align-start">
                    <Button variant="warning" onClick={this.streamModalHandlerShow} className="mb-2 font-weight-bold text-white"  type="button" data-toggle="modal" data-target="#stream">Start Stream</Button>
                    <Button variant="outline-warning" onClick={this.filterModalHandlerShow} className="ml-auto mb-2 font-weight-bold"><i className="fas fa-filter"> </i> Filter</Button>
                </div>
                <Filter show={this.state.filterModals}>
                	<Button variant="warning" onClick={this.filterModalHandlerClose}>
			            Post
			        </Button>
                </Filter>
                <StreamStart show={this.state.streamModals}>
                	<Button variant="warning" onClick={this.streamModalHandlerClose}>
			            Post
			        </Button>
                </StreamStart>
                <LiveStreamItem/>
            </div>
		)
	}
}
export class SongMart extends React.Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 martModals:false
		}
	}
	martModalHandlerClose = () =>{
		this.setState({
			martModals:false
		})
	}
	martModalHandlerShow = () =>{
		this.setState({
			martModals:true
		})
	}
	filterModalHandlerClose = () =>{
		this.setState({
			filterModals:false
		})
	}
	filterModalHandlerShow = () =>{
		this.setState({
			filterModals:true
		})
	}
	render() {
		return (
			<div className="pr-3 pl-3 customSection">
                <div className="d-flex text-align-start">
                    <button onClick={this.martModalHandlerShow} className="btn btn-warning  mb-2 font-weight-bold text-white" data-toggle="modal" data-target="#promote">Promote</button>
                    <button onClick={this.filterModalHandlerShow} className="btn btn-outline-warning mb-2 ml-auto font-weight-bold"><i className="fas fa-filter"> </i> Filter</button>
                </div>
                <Filter show={this.state.filterModals}>
                	<Button variant="warning" onClick={this.filterModalHandlerClose}>
			            Post
			        </Button>
                </Filter>
                <MartPromote show={this.state.martModals}>
                	<Button variant="warning" onClick={this.martModalHandlerClose}>
			            Post
			        </Button>
                </MartPromote>
                <ColumnCardItem/>
            </div>
		)
	}
}
export class SavedPlaylist extends React.Component {
	constructor(props) {
		super(props)
	
		this.state = {

			 
		}
		const {postinfo,icon} = props
		this.postinfo = postinfo
		this.icon = icon
	}

	render() {
		return(
			<div className="pl-3 pr-3 customSection"> 
			    <FlexFillCardItem postinfos={this.postinfo} icon={this.icon}/>
			</div>
		)
	}
}
export class Collection extends React.Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 
		}
	}
	render() {
		return(
			<div className="pr-3 pl-3 customSection">
                <ColumnCardItem/>
            </div>
		)
	}
}

export class Notification extends React.Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 
		}
	}
	render() {
		return(
			<div>
				<div className="pr-3 pl-3 customSection" >
					<div className="sticky-top mb-1 customBgTitle" style={{top:"89px",zIndex:"0"}}>
						<a className="d-flex customTitleFont text-light text-decoration-none font-weight-bold pt-2 pb-2 ">
							Notification
						</a>
					</div>
	                <NotificationItem />
	            </div>
			</div>
		)
	}
}
export class Account extends React.Component {
	constructor(props) {
		super(props)
		const {username,name,profilepic,bgfilepic} = props.userinfo
		this.state = {
			 username:username,
			 name:name,
			 profilepic:profilepic,
			 bgfilepic: bgfilepic
		}
	}
	render() {
		return(
			<div className="pr-3 pl-3 customSection ">
				<div className="sticky-top mb-1 customBgTitle" style={{top:"89px",zIndex:"0"}}>
					<a className="d-flex customTitleFont text-light text-decoration-none font-weight-bold pt-2 pb-2 ">
						Account
					</a>
				</div>
                
                <div className="d-flex flex-column rounded profile-bg">
                    <div className="d-flex rounded-top bg-warning p-1">
                        
                    </div>
                    <div className="d-flex flex-wrap ">
                        <div className="p-2" >
                            <div style={{height: "150px",width: "150px"}}>
                                <img alt="profilepic"  src={require(`assets/pics/${this.state.profilepic}`)} className="rounded-circle border p-1 bg-white border-white h-100 w-100"/>
                            </div>
                        </div>
                        <div className="p-2 flex-fill">
                            <div className="d-flex  align-items-start rounded bg-light flex-column p-1">
                                <div className="font-weight-bold col-12 text-truncate" style={{fontSize: "18pt"}}>{this.state.name}</div>
                                    <div className="font-weight-regular col-12 text-truncate">{this.state.username}</div> 
                                    <div className="font-weight-bold d-flex col-12 text-truncate">
                                        <div className="">Followers: 200k <i className="fas fa-heart"></i></div>
                                    </div>
                                <div className="font-weight-bold col-12 text-truncate">Released</div>
                                <div className="font-weight-bold d-flex col-12 text-truncate">
                                    <div className="mr-2">Album: 10 <i className="fas fa-compact-disc"></i>  </div>
                                    <div className="ml-2">Songs: 99 <i className="fas fa-music"></i> </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className="bg-dark p-3">
                        <div className="p-2">
                            <label className="font-weight-bold text-warning " style={{fontSize: "18pt"}}>Bio</label>
                            <p className="label text-light font-weight-lighter">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="rounded-bottomp-3">
                        <div className="p-2">
                            
                        </div>
                    </div>
                </div>
			</div>
		)
	}
}
export class Cart extends React.Component{
	constructor(){
		super()
		this.state = {

		}
	}
	render(){
		return (
			<div className="d-flex text-align-start sticky-top" id="homenav">
    		 	<a href="" className="text-warning d-block text-decoration-none pt-2 pb-2 pl-3 pr-3  font-weight-bold" style={{fontSize: "20pt"}}>Cart</a>
    		</div>
		)
	}
}
export class Wallet extends React.Component{
	constructor(){
		super()
		this.state = {

		}
	}
	render(){
		return (
			<div className="pr-3 pl-3 customSection">
				<div className="d-flex sticky-top text-align-start" id="homenav">
	    		 	<a href="" className="text-warning d-block text-decoration-none pt-2 pb-2 pl-3 pr-3  font-weight-bold" style={{fontSize: "20pt"}}>Wallet</a>
	    		</div>
	            <div className="card">
	                <div className="card-body">
	                    <div className="text-center d-block">Balance</div>
	                    <div style={{fontSize: "20pt"}} className="font-weight-bolder text-center">1,200</div> 
	                    <div className="text-center">= $10.00</div>
	                    <div className="text-center">Exchange Rate: $1.00 = 210</div>
	                    <div className="d-flex justify-content-center mt-3">
	                        <button className="btn btn-warning p-2">Recharge</button>
	                        <button className="btn btn-outline-warning p-2">Cash Out</button>
	                    </div>
	                </div>
	            </div>
            </div>
		)
	}
}