import React from 'react';
import ReactDOM from 'react-dom';
import {firebase} from './firebase';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes'
import Header from './components/Header/header';
const App= (props)=>{
   
  return(
      <BrowserRouter>
        <Header/>
          <Routes {...props}/>
      </BrowserRouter>
    )
}

firebase.auth().onAuthStateChanged((user)=>{
  ReactDOM.render(
    <App auth={user}/>,document.getElementById('root')
 );
 
})
