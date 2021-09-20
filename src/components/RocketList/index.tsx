import { CircularProgress } from '@material-ui/core';
import React from 'react'
import { useRocketsListQuery } from '../../generated/graphql'
import { HandleId } from '../types';
import RocketList from './RocketList';

const RocketListContainer: React.FC<HandleId> = (props) => {

    const { data, error, loading } = useRocketsListQuery();

    if (loading) return <div className='spinner-container'><CircularProgress className='spinner' /></div>;

    if (error || !data) return <h1>Error!!</h1>;

    return <RocketList data={data} {...props} />
}

export default RocketListContainer
