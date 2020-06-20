import React,{Component} from 'react';
import 'App.css';
import {WelcomePage} from 'scenes/Welcome'
import {Main} from 'scenes/Main'
import {NotFound} from 'components/404'
import {HashRouter, Route, HashLink as Link, Switch,Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  	return (

  		<div className="App"> 
  			<HashRouter>
	  			<Switch>
	  				<Route exact path="/github" component={()=> {window.location.href="https://youtube.com"; return null;}} />
	  				<Route exact path="/" component={WelcomePage}/>
	  				<Route exact path="/user/feed" component={Main}/>
	  				<Route exact path="/user/stream" component={Main}/>
	  				<Route exact path="/user/mart" component={Main}/>
	  				<Route exact path="/user/saved" component={Main}/>
	  				<Route exact path="/user/collection" component={Main}/>
	  				<Route exact path="/user/account" component={Main}/>
	  				<Route exact path="/user/notification" component={Main}/>
	  			</Switch>
	  		</HashRouter>
  		</div>
  	)
}

