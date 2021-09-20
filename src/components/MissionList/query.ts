import gql from "graphql-tag";

export const queryMissionsList = gql`
  query MissionsList {
    missions {
      mission_name
      mission_id
    }
  }
`;
