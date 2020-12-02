import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { StyleSheet, View } from 'react-native';
import { Route, Switch } from 'react-router-native';
import RepositoryList from './RepositoryList/RepositoryList';
import AppBar from './AppBar/AppBar';
import SignIn from './SingIn/SignIn';
import SignUp from './SignUp/SignUp';
import SingleRepository from './SingleRepository/SingleRepository';
import CreateReview from './CreateReview/CreateReview';
import OrderSelection from './RepositoryList/OrderSelection';
import SearchBar from './RepositoryList/SearchBar';
import MyReviews from './MyReviews/MyReviews';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e1e4e8',
        flexGrow: 1,
        flexShrink: 1,
    }
});

const Main = () => {
    const [valueForQuery, setValueForQuery] = useState(["CREATED_AT", "DESC"]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchQueryDelayed] = useDebounce(searchQuery, 500);

    return (
        <View style={styles.container}>
            <AppBar />
            <Switch>
                <Route path="/" exact>
                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                    <OrderSelection setValueForQuery={setValueForQuery}/>
                    <RepositoryList valueForQuery={valueForQuery} searchQueryDelayed={searchQueryDelayed}/>
                </Route>
                <Route exact path="/signin">
                    <SignIn />
                </Route>
                <Route exact path="/signup">
                    <SignUp />
                </Route>
                <Route exact path="/createareview">
                    <CreateReview />
                </Route>
                <Route exact path="/myreviews">
                    <MyReviews />
                </Route>
                <Route path={`/:id`}>
                    <SingleRepository />
                </Route>
            </Switch>
        </View>
    );
};

export default Main;