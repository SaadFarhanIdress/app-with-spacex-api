import { Button, Typography } from '@material-ui/core';
import React from 'react';
import './styles.css';

const Home = () => {
    return (
        <div className='greetings'>
            <Typography variant='h1' className='greetings-heading'>Welcome to my project!</Typography>
            <div>
                <Button className='greetings-button'>ROCKETS</Button>
                <Button className='greetings-button'>LAUNCHES</Button>
                <Button className='greetings-button'>MISSIONS</Button>
            </div>
        </div>
    )
}

export default Home
