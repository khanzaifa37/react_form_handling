import React from 'react';
import {Link} from 'react-router-dom';
const Header =()=>{
    return (
        <header>
            <div >
                <Link to="/uncontrolled" >Uncontrolled</Link>
                <Link to="/controlled" >Controlled</Link>
                <Link to="/dashboard" >Dashboard</Link>
                <Link to="/login">Login</Link>
                <Link to="/users" >Users</Link> 
                
            </div>
        </header>
        
        
    )
}

export default Header;