import gql from "graphql-tag";

export const queryRocketsList = gql`
  query RocketsList {
    rockets {
      rocket_name
      rocket_id
    }
  }
`;
