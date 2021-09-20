import gql from "graphql-tag";

export const queryMissionProfile = gql`
  query MissionProfile($missionId: String!) {
    mission(id: $missionId) {
      mission_name
      manufacturers
      wikipedia
      website
      twitter
      description
    }
  }
`;
