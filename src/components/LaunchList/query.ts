import { gql } from "graphql-tag";

export const queryLaunchList = gql`
  query LaunchList {
    launches {
      flight_number
      mission_name
      launch_year
    }
  }
`;
