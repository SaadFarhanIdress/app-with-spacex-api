import { Typography } from '@material-ui/core'
import React from 'react'
import { RocketProfileQuery } from '../../generated/graphql'

interface Props {
    data: RocketProfileQuery;
}

const RocketProfile: React.FC<Props> = ({ data }) => {

    if (!data.rocket) return <h1>Select a rocket first!!!</h1>

    return (
        <div className='profile-box'>
            <div className='status'>
                {data.rocket.active ? (
                    <Typography className='status-success'>Active</Typography>
                ) : (
                    <Typography className='status-failed'>Inactive</Typography>
                )}
            </div>
            <Typography className='title'>
                {data.rocket.rocket_name}
            </Typography>
            <Typography className='desc'>{data.rocket.description}</Typography>
            {data.rocket.flickr_images && <Typography className='title'>Images:</Typography>}
            {!!data.rocket.flickr_images && (
                <div className='image-grid'>
                    {data.rocket.flickr_images.map((image, i) =>
                        image ? (
                            <img
                                src={image}
                                className='image'
                                key={image}
                                alt='cat'
                            />
                        ) : null
                    )}
                </div>
            )}
            <Typography className='title'>
                You can read more about that:
            </Typography>
            {data.rocket?.wikipedia &&
                <a className='anchor' href={data.rocket.wikipedia}>Website</a>}
        </div>
    )
}

export default RocketProfile
