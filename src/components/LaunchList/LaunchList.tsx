import React from "react";
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from '../../styles/profileAndList';
import rocket from '../../images/rocket.png';
import { LaunchListQuery } from "../../generated/graphql";
import { useHistory } from 'react-router-dom';
import { HandleId } from "../types";

interface Props extends HandleId {
  data: LaunchListQuery;
}

const LaunchList: React.FC<Props> = ({ data, handleIdChange }) => {

  const history = useHistory();

  const classes = useStyles();

  return (<>
    <Grid container className="grid-box" spacing={1}>
      {!!data.launches && data.launches.map((launch: any, i: any) =>
        !!launch && (
          <Grid item xs={12} md={4} lg={3} sm={6} className={classes.paper}>
            <div className='box' onClick={() => {
              handleIdChange(launch.flight_number!)
              history.push('/launch')
            }}>
              <img src={rocket} alt='rocket' className='rocket' />
              <Typography className='heading'>{launch.mission_name} ({launch.launch_year})</Typography>
            </div>
          </Grid>
        ))}
    </Grid>
  </>);
};

export default LaunchList;
