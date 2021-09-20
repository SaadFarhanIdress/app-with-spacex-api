import { CircularProgress } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useLaunchProfileQuery } from "../../generated/graphql";
import { OwnProps } from "../../types/Profile";
import LaunchProfile from "./LaunchProfile";

const LaunchProfileContainer: React.FC<OwnProps> = ({ id }) => {
  const { data, error, loading, refetch } = useLaunchProfileQuery({
    variables: { id: String(id) },
  });

  useEffect(() => {
    refetch({ id: String(id) });
  }, [refetch, id]);

  if (loading) {
    return <div className='spinner-container'><CircularProgress className='spinner' /></div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a flight from the panel</div>;
  }

  return <LaunchProfile data={data} />;
};

export default LaunchProfileContainer;
