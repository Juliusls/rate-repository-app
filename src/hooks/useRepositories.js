import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (initialRepositories = []) => {
    const { loading, error, data } = useQuery(GET_REPOSITORIES,
        { fetchPolicy: 'cache-and-network' }
    );

    let repositories = initialRepositories;

    if (data) {
        repositories = data.repositories.edges.map(({ node }) => node);
    }

    return { repositories, loading, error };
};

export default useRepositories;