import { Typography } from '@material-ui/core'
import React from 'react'
import { MissionProfileQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
    data: MissionProfileQuery;
}

const MissionProfile: React.FC<Props> = ({ data }) => {

    if (!data.mission) return <div>Select a mission first!</div>

    return (
        <div className='profile-box'>
            <Typography className='title'>
                {data.mission.mission_name}
            </Typography>
            <Typography className='desc'>
                {data.mission.description}
            </Typography>
            <Typography className='title'>
                You can read more about that:
            </Typography>
            {data.mission?.wikipedia && <>
                <a className='anchor' href={data.mission.website}>Website</a> <br />
                <a className='anchor' href={data.mission.wikipedia}>Wikipedia</a> <br />
                {data.mission?.twitter && <a className='anchor' href={data.mission.twitter}>Twitter</a>} <br />
            </>}
        </div>
    )
}

export default MissionProfile
