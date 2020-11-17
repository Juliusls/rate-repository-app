import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import { Link } from 'react-router-native';
import { ApolloClient, useQuery } from '@apollo/client';
import { GET_AUTHORIZES_USER } from '../graphql/queries';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/client';


const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor:  theme.appBar.backgroundColor,
        display: 'flex',
        flexDirection: 'row'
    },
});

const AppBar = () => {
    const { data } = useQuery(GET_AUTHORIZES_USER);
    const authStorage = useContext(AuthStorageContext);
    const apolloClient = useApolloClient();

    const signOut = async () => {
        await authStorage.removeAccessToken();
        await apolloClient.resetStore();
    };
    
    const signInOut = data && data.authorizedUser 
        ? <AppBarTab onPress={signOut}>Sign Out</AppBarTab>
        : <Link to="/signin" component={AppBarTab}>SignIn</Link>;

    return <View style={styles.container}>
        <ScrollView horizontal>
            <Link to="/" component={AppBarTab}>Repositories</Link>
            {signInOut}
        </ScrollView>
    </View>;
};

export default AppBar;

