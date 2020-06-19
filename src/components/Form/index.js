import React from 'react'
import {RegisterForm,LoginForm} from 'components/Form/components/FormItem' 
export class Form extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			isShownRegister:true,
			username:"",
			password:""
		}
	}
	switchForm(){
		this.setState({
			isShownRegister: !this.state.isShownRegister
		})
		console.log(this.state.isShownRegister)
		
	}
	login(event){
		this.setState({
			username: event.target.value()
		})
	}

	render() {
		return (
			this.state.isShownRegister ? 
			<RegisterForm>
				<button type="submit" onClick={() => this.switchForm()} className="btn btn-outline-light">Login?</button>
			</RegisterForm> : 
			<LoginForm >
				<button type="submit" onClick={() => this.switchForm()} className="btn btn-outline-light">Register?</button>
			</LoginForm>		
		)
	}
}