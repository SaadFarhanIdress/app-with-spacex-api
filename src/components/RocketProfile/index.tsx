import { CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useRocketProfileQuery } from '../../generated/graphql';
import { IdProp } from '../types';
import RocketProfile from './RocketProfile';

const RocketProfileContainer: React.FC<IdProp> = ({ id }) => {

    const { data, error, loading, refetch } = useRocketProfileQuery({
        variables: { rocketId: String(id) }
    });

    useEffect(() => {
        refetch({ rocketId: String(id) })
    }, [refetch, id]);

    if (loading) return <div className='spinner-container'><CircularProgress className='spinner' /></div>

    if (error || !data) return <h1>Error</h1>

    return <RocketProfile data={data} />
}

export default RocketProfileContainer
