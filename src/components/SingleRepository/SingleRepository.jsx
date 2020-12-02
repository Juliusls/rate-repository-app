import React from 'react';
import { FlatList } from 'react-native';
import { useParams } from 'react-router-native';
import useRepository from '../../hooks/useRepository';
import ReviewItem from './ReviewItem';
import ItemSeparator from '../ItemSeparator';
import RepositoryInfo from '../RepositoryInfo';

const SingleRepository = () => {
    const { id } = useParams();

    const { repository, reviews, fetchMore } = useRepository({
        id
    });

    const onEndReach = () => {
        fetchMore();
    };
  
    return (
        <FlatList
            data={reviews}
            ListHeaderComponent={() => <RepositoryInfo repository={repository} singleRepo={true}/>}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={({ node: { id } }) => id}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
            renderItem={({ item }) => <ReviewItem review={item} />}
        />
    );
};

export default SingleRepository;