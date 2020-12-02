import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = ({ id }) => {
    const first = 3;
    const { loading, error, data, fetchMore, ...result} = useQuery(GET_REPOSITORY, {
        fetchPolicy: "cache-and-network",
        variables: { 
            id: id,
            first: first
        }
    });

    const handleFetchmore = () => {
        const canFetchMore =
            !loading && data && data.repository.reviews.pageInfo.hasNextPage;

        if (!canFetchMore) {
            return;
        }

        fetchMore({
            query: GET_REPOSITORY,
            variables: {
                fetchPolicy: 'cache-and-network',
                id: id,
                first: first,
                after: data.repository.reviews.pageInfo.endCursor,
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                const nextResult = {
                    repository: {
                        ...fetchMoreResult.repository,
                        reviews: {
                            ...fetchMoreResult.repository.reviews,
                            edges: [
                                ...previousResult.repository.reviews.edges,
                                ...fetchMoreResult.repository.reviews.edges
                            ],
                        },
                    },
                };
                return nextResult;
            }
        });
    };

    return {
        repository: data?.repository,
        reviews: data?.repository.reviews.edges,
        fetchMore: handleFetchmore,
        loading,
        error,
        ...result
    };
};

export default useRepository;
    