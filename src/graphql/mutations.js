import { gql } from '@apollo/client';

export const AUTHORIZE_USER = gql`
    mutation AuthorizeUser($username: String!, $password: String!) {
        authorize(credentials: { username: $username, password: $password })  {
            accessToken
        }
    }
`;