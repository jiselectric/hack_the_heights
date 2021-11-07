import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import logo from "../assets/tutor.png";
import {Link} from 'react-router-dom';

function navbar() {
    return (
        <AppBar position = 'static'> 
            <CssBaseline /> 
            <Toolbar>  
                <div className = "navbar">
                <div className = "leftSide">
                    <img src={logo} />
                </div>
                <div className = "rightSide">
                    <Link to='/'> Home </Link>
                    <Link to='/student'> Student </Link>
                    <Link to='/tutor'> Tutor </Link>
                    <Link to='/matches'> Matches </Link>
                </div>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default navbar
