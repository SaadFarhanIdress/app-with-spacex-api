import { Grid, Typography } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useStyles } from '../../styles/profileAndList';
import rocket from '../../images/rocket.png'
import { HandleId } from '../types';
import { MissionsListQuery } from '../../generated/graphql';

interface Props extends HandleId {
    data: MissionsListQuery;
}

const MissionList: React.FC<Props> = ({ data, handleIdChange }) => {

    const history = useHistory();

    const classes = useStyles();

    return (<>
        <Grid container className="grid-box" spacing={1}>
            {!!data.missions && data.missions.map((mission, i) =>
                !!mission && (
                    <Grid item xs={12} md={4} lg={3} sm={6} className={classes.paper}>
                        <div className='box' onClick={() => {
                            handleIdChange(mission.mission_id!)
                            history.push('/mission')
                        }}>
                            <img src={rocket} alt='rocket' className='rocket' />
                            <Typography className='heading'>{mission.mission_name}</Typography>
                        </div>
                    </Grid>
                ))}
        </Grid>
    </>)
}

export default MissionList
