import { gql } from 'apollo-boost';

export const PAGE_INFO = gql`
  fragment PageInfoData on PageInfo {
    hasNextPage
    totalCount
    startCursor
    endCursor
  }
`;


export const REPOSITORY_INFO = gql`
  fragment RepositoryInfoData on Repository {
    id
    ownerAvatarUrl
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
  }
`;