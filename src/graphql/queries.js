import { gql } from 'apollo-boost';
import { PAGE_INFO, REPOSITORY_INFO } from './fragments';

export const GET_REPOSITORIES = gql`
    query getRepositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $first: Int, $after: String) {
        repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, first: $first, after: $after) {
            edges {
                node {
                    ...RepositoryInfoData
                }
                cursor
            }
            pageInfo {
                ...PageInfoData
            }
        }
    }
    ${PAGE_INFO}
    ${REPOSITORY_INFO}
`;

export const GET_AUTHORIZED_USER = gql`
    query getAuthorizedUser($includeReviews: Boolean = false, $first: Int, $after: String) {
        authorizedUser {
            id
            username
            reviews(first: $first, after: $after) @include(if: $includeReviews) {
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        repositoryId
                        user {
                            id
                            username
                        }
                    }
                    cursor
                }
                pageInfo {
                    ...PageInfoData
                }
            }
        }
    }
    ${PAGE_INFO}
`;

export const GET_REPOSITORY = gql`
    query getRepository ($id: ID!, $first: Int, $after: String) {
        repository(id: $id) {
            ...RepositoryInfoData
            reviews(first: $first, after: $after) {
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        repositoryId
                        user {
                            id
                            username
                        }
                    }
                    cursor
                }
                pageInfo {
                    ...PageInfoData
                }
            }
        }
    }
    ${PAGE_INFO}
    ${REPOSITORY_INFO}
`;