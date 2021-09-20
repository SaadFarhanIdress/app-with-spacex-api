import { Typography } from "@material-ui/core";
import React from "react";
import { LaunchProfileQuery } from "../../generated/graphql";

interface Props {
  data: LaunchProfileQuery;
}

const LaunchProfile: React.FC<Props> = ({ data }) => {

  if (!data.launch) {
    return <div>No launch available</div>;
  }

  return (
    <div className='profile-box'>
      <div className='status'>
        <Typography className='flight-number'>Flight {data.launch.flight_number}: </Typography>
        {data.launch.launch_success ? (
          <Typography className='status-success'>Success</Typography>
        ) : (
          <Typography className='status-failed'>Failed</Typography>
        )}
      </div>
      <Typography className='title'>
        {data.launch.mission_name}
        {data.launch.rocket &&
          ` (${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
      </Typography>
      <Typography className='desc'>{data.launch.details}</Typography>
      {data.launch.links?.flickr_images && <Typography className='title'>Images:</Typography>}
      {!!data.launch.links && !!data.launch.links.flickr_images && (
        <div className='image-grid'>
          {data.launch.links.flickr_images.map((image, i) =>
            image ? (
              <img
                src={image}
                className='image'
                key={image}
                alt={`${data.launch?.mission_name} ${i}`}
              />
            ) : null
          )}
        </div>
      )}
    </div>
  );
};

export default LaunchProfile;
