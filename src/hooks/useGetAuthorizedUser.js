import { useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

const useGetAuthorizedUser = () => {
    const first = 3;
    const { loading, fetchMore, data, refetch, ...result } = useQuery(GET_AUTHORIZED_USER, {
        variables: {
            fetchPolicy: 'cache-and-network',
            includeReviews: true,
            first: first
        }
    });

    const handleFetchMore = () => {
        const canFetchMore =
          !loading && data && data.authorizedUser.reviews.pageInfo.hasNextPage;
    
        if (!canFetchMore) {
            return;
        }

        fetchMore({
            query: GET_AUTHORIZED_USER,
            variables: {
                after: data.authorizedUser.reviews.pageInfo.endCursor,
                includeReviews: true,
                first: first,
                fetchPolicy: 'cache-and-network',
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                const nextResult = {
                    authorizedUser: {
                        ...fetchMoreResult.authorizedUser,
                        reviews: {
                            ...fetchMoreResult.authorizedUser.reviews,
                            edges: [
                                ...previousResult.authorizedUser.reviews.edges,
                                ...fetchMoreResult.authorizedUser.reviews.edges,
                            ],
                        },
                    }
                };
    
                return nextResult;
            },
        });
    };

    return {
        review: data?.authorizedUser.reviews.edges,
        loading,
        refetch,
        fetchMore: handleFetchMore,
        ...result
    };
};

export default useGetAuthorizedUser;
