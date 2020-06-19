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
  			<Router>
	  			<Switch>
	  				<Route exact path={`${process.env.PUBLIC_URL}/`} component={WelcomePage}/>
	  				<Route exact path="/user/feed" component={Main}/>
	  				<Route exact path="/user/stream" component={Main}/>
	  				<Route exact path="/user/mart" component={Main}/>
	  				<Route exact path="/user/saved" component={Main}/>
	  				<Route exact path="/user/collection" component={Main}/>
	  				<Route exact path="/user/account" component={Main}/>
	  				<Route exact path="/user/notification" component={Main}/>
	  			</Switch>
	  		</Router>
  		</div>
  	)
}

