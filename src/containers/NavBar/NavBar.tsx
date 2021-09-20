import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { useStyles } from '../../styles/navBar';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {

    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className='navbar'>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Space X
                    </Typography>
                    <Link to='/' className='navbtn'><Button color="inherit">Home</Button></Link>
                    <Link to='/launches' className='navbtn'><Button color="inherit">Launches</Button></Link>
                    <Link to='/rockets' className='navbtn'><Button color="inherit">Rockets</Button></Link>
                    <Link to='/missions' className='navbtn'><Button color="inherit">Missions</Button></Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
