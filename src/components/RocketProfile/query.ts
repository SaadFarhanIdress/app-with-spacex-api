import gql from "graphql-tag";

export const queryRocketsProfile = gql`
  query RocketProfile($rocketId: String!) {
    rocket(id: $rocketId) {
    active
    flickr_images
    wikipedia
    description
    rocket_name
    }
  }
`;
