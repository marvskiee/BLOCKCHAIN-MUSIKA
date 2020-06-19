import React,{Component} from 'react';
import 'App.css';
import {WelcomePage} from 'scenes/Welcome'
import {Main} from 'scenes/Main'
import {NotFound} from 'components/404'
import {BrowserRouter as Router, Route, Link, Switch,Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  	return (

  		<div className="App"> 
  		Test baby
  			<Router>
	  			<Switch>
	  				<Route exact path={`${process.env.PUBLIC_URL}/`} component={WelcomePage}/>
	  				<Route exact path={`${process.env.PUBLIC_URL}user/feed`} component={Main}/>
	  				<Route exact path={`${process.env.PUBLIC_URL}/user/stream`} component={Main}/>
	  				<Route exact path={`${process.env.PUBLIC_URL}/user/mart`} component={Main}/>
	  				<Route exact path={`${process.env.PUBLIC_URL}/user/saved`} component={Main}/>
	  				<Route exact path={`${process.env.PUBLIC_URL}/user/collection`} component={Main}/>
	  				<Route exact path={`${process.env.PUBLIC_URL}/user/account`} component={Main}/>
	  				<Route exact path={`${process.env.PUBLIC_URL}/user/notification`} component={Main}/>
	  				
	  			</Switch>
	  		</Router>
  		</div>
  	)
}

