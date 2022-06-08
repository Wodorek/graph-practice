import { gql } from 'graphql-tag';

export const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;
