import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useHistory } from "react-router-native";
import RepositoryInfo from '../RepositoryInfo';
import ItemSeparator from '../ItemSeparator';

const RepositoryListContainer = ({ repositories, onEndReach }) => {
    let history = useHistory();

    const onPress = (itemid) => {
        history.push(`/${itemid}`);
    };

    return (
        <FlatList
            data={repositories}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={ItemSeparator}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
            renderItem={({ item }) => 
                <TouchableOpacity
                    onPress={() => onPress(item.id)}
                >
                    <RepositoryInfo repository={item} />
                </TouchableOpacity>
            }
        />
    );
};

export default RepositoryListContainer;