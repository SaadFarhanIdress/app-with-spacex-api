import { Typography } from '@material-ui/core';
import './Home.css';

const Home = () => {
    return (
        <div className='greetings'>
            <Typography variant='h1' className='greetings-heading'>Welcome to my project!</Typography>
            <p className="bottom-div">
                Made with
                <img
                    className="small-image"
                    alt="Heart"
                    src="https://cdn.iconscout.com/icon/free/png-256/heart-1767836-1502416.png"
                />
                by <a href="http://www.github.com/SaadFarhanIdress">Saad Farhan</a>
                <br />
                Don't forget to star my repository :) <br />
                Link:&nbsp;
                <a href="https://github.com/SaadFarhanIdress/app-with-spacex-api">
                    https://github.com/SaadFarhanIdress/app-with-spacex-api
                </a>
            </p>
        </div>
    )
}

export default Home
