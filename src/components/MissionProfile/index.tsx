import { CircularProgress } from '@material-ui/core'
import React from 'react'
import { useEffect } from 'react'
import { useMissionProfileQuery } from '../../generated/graphql'
import { IdProp } from '../types'
import MissionProfile from './MissionProfile'

const MissionProfileContainer: React.FC<IdProp> = ({ id }) => {

    const { data, error, loading, refetch } = useMissionProfileQuery({
        variables: { missionId: String(id) },
    })

    useEffect(() => {
        refetch({ missionId: String(id) })
    }, [refetch, id])

    if (loading) {
        return <div className='spinner-container'><CircularProgress className='spinner' /></div>
    }

    if (error) {
        return <h1>Error!!!</h1>
    }

    if (!data) {
        return <h1>No mission found according to given reference.</h1>
    }

    return <MissionProfile data={data} />
}

export default MissionProfileContainer
