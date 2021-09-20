import { CircularProgress } from '@material-ui/core';
import React from 'react'
import { useMissionsListQuery } from '../../generated/graphql'
import { HandleId } from '../types';
import MissionList from './MissionList';

const MissionListContainer: React.FC<HandleId> = (props) => {

    const { data, error, loading } = useMissionsListQuery();

    if (loading) {
        return <div className='spinner-container'><CircularProgress className='spinner' /></div>;
    }

    if (error || !data) {
        return <div>ERROR!!</div>;
    }

    return (
        <MissionList data={data} {...props} />
    )
}

export default MissionListContainer
