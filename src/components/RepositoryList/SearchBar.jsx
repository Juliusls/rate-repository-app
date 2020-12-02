import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBar = ({setSearchQuery, searchQuery}) => {
    const onChangeSearch = value => {
        setSearchQuery(value);
    };
    
    return (
        <Searchbar
            style={{
                margin: 10,
            }}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
    );
};

export default SearchBar;