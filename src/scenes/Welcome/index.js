import React,{useState} from 'react'
import {Feature} from 'scenes/Welcome/components/Feature'
import {About} from 'scenes/Welcome/components/About'
import {Navbar} from 'components/Navbar'
import {Form} from 'components/Form'
import {faAlignRight} from '@fortawesome/free-solid-svg-icons'
import {DownloadApp} from 'components/Modals/'
import {HashLink as Link} from 'react-router-hash-link'
import {Button}  from 'react-bootstrap'
export const WelcomePage = () =>{
	const githubLink = "/github";
	const navMainLinks = [
		{
			title: "Home",
			anchor: "#home"
		},
		{
			title: "Features",
			anchor: "#feature"
		},
		{
			title:"About Us",
			anchor: "#aboutus"

		}
	];
	const [downloadshow, setDownloadShow] = useState(false);
	const dowloadAppModalClose = () => setDownloadShow(false);
	const dowloadAppModalShow = () => setDownloadShow(true);
	console.log(downloadshow);
	return (
	<>
		<DownloadApp shown={downloadshow}>
			<Button variant="dark" onClick={dowloadAppModalClose}>
	            Close
	          </Button>
		</DownloadApp>
		<div className="primaryColor" id="home">
			<div className="wallpaper"></div>
	    	
	    	<Navbar navlinks={navMainLinks} toggle={faAlignRight}/>
		    <div className="container d-flex  " >
		    	<div className="row text-white">
		    		<div className="col-md-6 pt-5 pb-5">
		    			<div className="d-flex align-items-center formRegister">
		    				<div>
					          	<p className="introFontSize text-center">Community for aspiring <span className="font-weight-bold">Music Artist </span>and a safe place to promote your own made songs</p>		          		
					        	<div className="text-center">
					        		<Button variant="outline-warning" onClick={dowloadAppModalShow} className="font-weight-bold p-3 m-2" href="#">Download Musika Android</Button>
					        		<Link to={githubLink} target="_blank" className="btn btn-light font-weight-bold p-3 m-2" href="#">Follow us on Github</Link>
					      		</div>
					      	</div>
				      	</div>
			      	</div>
			      	<div className="col-md-2"></div>
			      	<Form/>
		    
		      	</div>
		    </div>

		    <span className="p-5 m-5" id="feature"> &nbsp;</span>

		    <div className="bg-light">
				<div className="container pt-5 pb-5">

					<div className="text-center p-4">
						<a href="#feature" className="text-center text-decoration text-dark font-weight-bold brandFontSize">Features</a>
				    </div>
				    <p className="text-justify text-dark">
				    	<span className="pr-5"/>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				    </p>
			    
			        <div className="row ">
			            <Feature/>
			        </div> 
			    </div>
		    </div>

		    <span className="p-5 m-5" id="aboutus"> &nbsp;</span>

		    <div >
		    	<div className="container pt-5 pb-5">

					<div className="text-center p-4">
						<a href="#aboutus" className="text-center text-decoration text-light font-weight-bold brandFontSize">About Us</a>
				    </div>
				    <div className="row">
				    	<div className="col-lg-5">

				    		<div className="d-flex h-100">
					    		<div>
					    			<p className="text-center text-decoration text-warning font-weight-bold navFontSize">Disclamer</p>
						    		<p className="text-justify text-white">
								    	<span className="pr-5"/>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
									      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
									      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
									      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
									      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								    </p>
								    <div className="text-center mb-2">
								    	<Link to={githubLink} target="_blank" className="btn btn-light font-weight-bold p-3 m-2" href="#">Follow us on Github</Link>
						    		</div>
						    	</div>
						    </div>
				    	</div>
				    	<div className="col-lg-7 mb-5">
				    		<p className="text-center text-decoration text-warning font-weight-bold navFontSize">Developers</p>
						    <div className="row">
						        <About/>
						    </div>
				    	</div>
				    </div>
				    
				</div>
		    </div>

		    <div style={{height:"100px"}} className="d-flex align-items-center bg-white">
		    	<div className="container">
		    		<p className="text-center font-weight-bold">Copyright reserved Musika 2021</p>
		    	</div>
		    </div>
    	</div>
    </>
	)
}
