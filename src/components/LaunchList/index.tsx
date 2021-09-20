import { CircularProgress } from "@material-ui/core";
import React from "react";
import { useLaunchListQuery } from "../../generated/graphql";
import { HandleId } from "../types";
import LaunchList from "./LaunchList";

const LaunchListContainer: React.FC<HandleId> = (props) => {

  const { data, error, loading } = useLaunchListQuery();

  if (loading) return <div className='spinner-container'><CircularProgress className='spinner' /></div>;

  if (error || !data) return <div>ERROR</div>;

  return <LaunchList data={data} {...props} />;
};

export default LaunchListContainer;
