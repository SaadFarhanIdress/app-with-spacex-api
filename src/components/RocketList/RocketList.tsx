import { Grid, Typography } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useStyles } from '../../styles/profileAndList';
import rocketImage from '../../images/rocket.png';
import { RocketsListQuery } from '../../generated/graphql';
import { HandleId } from '../types';

interface Props extends HandleId {
    data: RocketsListQuery;
}

const RocketList: React.FC<Props> = ({ data, handleIdChange }) => {

    const history = useHistory();

    const classes = useStyles();

    return (<>
        <Grid container className="grid-box" spacing={1}>
            {!!data.rockets && data.rockets.map((rocket: any, i: any) =>
                !!rocket && (
                    <Grid item xs={12} md={4} lg={3} sm={6} className={classes.paper}>
                        <div className='box' onClick={() => {
                            handleIdChange(rocket.rocket_id!)
                            history.push('/rocket')
                        }}>
                            <img src={rocketImage} alt='rocket' className='rocket' />
                            <Typography className='heading'>{rocket.rocket_name}</Typography>
                        </div>
                    </Grid>
                ))}
        </Grid>
    </>)
}

export default RocketList
