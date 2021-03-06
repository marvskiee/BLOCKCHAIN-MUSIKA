import React from 'react'

function RegisterForm() {
	return (
			<div className="col-lg-4 primaryColor">
				<h1>Register</h1>
				<form>
				  <div class="form-group">
				    <label for="exampleInputEmail1">Email address</label>
				    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
				    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">Password</label>
				    <input type="password" class="form-control" id="exampleInputPassword1"/>
				  </div>
				  <div class="form-group form-check">
				    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
				    <label class="form-check-label" for="exampleCheck1">Check me out</label>
				  </div>
				  <div className="d-flex justify-content-around">
					  	<button type="submit" class="btn btn-warning">Confirm</button>
						<button type="submit" class="btn btn-outline-light">Login?</button>
					</div>
				</form>
			</div>
	)
}

export default RegisterForm