import React from 'react';
import {Route,Switch,Redirect } from 'react-router-dom';
import Controlled from './components/controlled';
import Uncontrolled from './components/uncontrolled';
import User from './components/user';
import Login from './components/login';
import Dashboard from './components/dashboard';

const PrivateRoute=({
    isLogged,
    component:Comp,
    ...rest
})=>{
   return <Route {...rest} component={(props)=>(
    isLogged ?
        <Comp {...props} />
    :
        <Redirect to="/login" />
   )} />
   
}



const Routes =(props)=>{
    return(
        <div>
            <Switch>
                <Route path="/users" exact component={User}/>
                <Route path="/login" exact component={Login}/>
                <PrivateRoute path="/dashboard" exact isLogged={props.auth} component={Dashboard}/>
                <Route path="/controlled" exact component={Controlled}/>
                <Route path="/uncontrolled" exact component={Uncontrolled}/>
            </Switch>
        </div>
    )
}

export default Routes;