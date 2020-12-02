import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({valueForQuery, searchQueryDelayed}) => {
    const first = 6;
    const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
        variables: { 
            orderBy: valueForQuery[0], 
            orderDirection: valueForQuery[1], 
            searchKeyword: searchQueryDelayed, 
            first: first
        }
    });

    const handleFetchMore = () => {
        const canFetchMore =
          !loading && data && data.repositories.pageInfo.hasNextPage;
    
        if (!canFetchMore) {
            return;
        }

        fetchMore({
            query: GET_REPOSITORIES,
            variables: {
                after: data.repositories.pageInfo.endCursor,
                first: first,
                fetchPolicy: 'cache-and-network',
                orderBy: valueForQuery[0],
                orderDirection: valueForQuery[1],
                searchKeyword: searchQueryDelayed
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                const nextResult = {
                    repositories: {
                        ...fetchMoreResult.repositories,
                        edges: [
                            ...previousResult.repositories.edges,
                            ...fetchMoreResult.repositories.edges,
                        ],
                    },
                };
    
                return nextResult;
            },
        });
    };

    return {
        repositories: data 
            ? data.repositories.edges.map(({ node }) => node)
            : undefined,
        fetchMore: handleFetchMore,
        loading,
        ...result,
    };
};

export default useRepositories;