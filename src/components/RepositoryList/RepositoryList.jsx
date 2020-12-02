import React from 'react';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = ({ valueForQuery, searchQueryDelayed }) => {
    const { repositories, fetchMore } = useRepositories({ valueForQuery, searchQueryDelayed });

    const onEndReach = () => {
        fetchMore();
    };
  
    return (
        <RepositoryListContainer repositories={repositories} onEndReach={onEndReach}/>);
};
  
export default RepositoryList;
