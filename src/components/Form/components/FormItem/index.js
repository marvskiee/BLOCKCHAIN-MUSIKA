import React from 'react'
import {Link} from 'react-router-dom'
export class RegisterForm extends React.Component {
	constructor(props) {
		super(props)
	
		this.state = {
			fname:"",
			lname:"",
			username:"",
			confirmPassword:"",
			password:""
		}
	}
	
	inputVal = e => {
		this.setState({
			[e.target.name]:[e.target.value]
		})
	}
	registerUser = e => {
		e.preventDefault()
	}

	render() {
		return (
			<div className="col-md-4 primaryColor align-self-center">
				<div className="d-flex align-items-center">
					<div className="flex-fill">
						<h1>Register</h1>
						<form onSubmit={this.registerUser}>
							<div className="d-flex">
								<div className="flex-fill form-group mr-1">
									<label htmlFor="exampleInputEmail1">First Name</label>
									<input type="email" className="form-control" value={this.state.fname} onChange={this.inputVal} name="fname" id="exampleInputEmail1"/>
								</div>
								<div className="flex-fill form-group ml-1">
									<label htmlFor="exampleInputEmail1">Last Name</label>
									<input type="email" className="form-control" value={this.state.lname} onChange={this.inputVal} name="lname" id="exampleInputEmail1"/>
								</div>
							</div>
							
						  	<div className="form-group">
						    	<label htmlFor="exampleInputEmail1">Email address or Username</label>
						    	<input type="email" className="form-control"  value={this.state.username} onChange={this.inputVal} name="username" id="exampleInputEmail1" aria-describedby="emailHelp"/>
						    	<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
						  	</div>
						  	<div className="form-group">
						    	<label htmlFor="exampleInputPassword1">Password</label>
						    	<input type="password" className="form-control"  value={this.state.password} onChange={this.inputVal} name="password" id="exampleInputPassword1"/>
						  	</div>
						  	<div className="form-group">
						    	<label htmlFor="exampleInputPassword1">Confirm Password</label>
						    	<input type="password" className="form-control"  value={this.state.confirmPassword} onChange={this.inputVal} name="confirmPassword" id="exampleInputPassword1"/>
						  	</div>
						  	<div className="form-group form-check">
						    	<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
						    	<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
						  	</div>
						  	<div className="d-flex justify-content-between">
								<button type="submit" className="btn btn-warning">Confirm</button>
								{this.props.children}
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}


export class LoginForm extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			username:"",
			password:""				 
		}
	}
	inputVal = (e) =>{
		this.setState({
			[e.target.name]:[e.target.value]
		})
	}
	loginUser = () =>{
		console.log(`${this.state.username} ${this.state.password}` )
	}

	render() {
		return(
			<div className="col-md-4 primaryColor align-self-center">
				<div className="d-flex align-items-center">
					<div className="flex-fill">
						<h1>Sign In</h1>
						<form>
						  	<div className="form-group">
						    	<label htmlFor="exampleInputEmail1">Email address or Username</label>
						    	<input type="email" className="form-control" value={this.state.username} onChange={this.inputVal} name="username" id="exampleInputEmail1" aria-describedby="emailHelp"/>
						    	<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
						  	</div>
						  	<div className="form-group">
						    	<label htmlFor="exampleInputPassword1">Password</label>
						    	<input type="password" className="form-control" value={this.state.password} onChange={this.inputVal} name="password" id="exampleInputPassword1"/>
						  	</div>
						  	<div className="form-group form-check">
						    	<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
						    	<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
						  	</div>
						  	<div className="d-flex justify-content-between">
								<Link to="/user/feed" type="submit" className="btn btn-warning" onClick={this.loginUser}>Login</Link>
								{this.props.children}
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}	
} 
