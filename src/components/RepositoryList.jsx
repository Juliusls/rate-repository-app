import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryListItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const RepositoryList = () => {
    const { repositories } = useRepositories();

    // Get the nodes from the edges array
    const repositoryNodes = repositories
        ? repositories
        : [];

    const styles = StyleSheet.create({
        separator: {
            height: 10,
            backgroundColor: '#e1e4e8'
        },
    });

    const ItemSeparator = () => <View style={styles.separator} />;

    return (
        <FlatList
            data={repositoryNodes}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <RepositoryListItem repo={item} />}

        />
    );
};

export default RepositoryList;
