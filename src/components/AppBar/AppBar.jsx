import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { useApolloClient } from '@apollo/client';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import theme from '../../utils/theme';
import { GET_AUTHORIZED_USER } from '../../graphql/queries';
import AuthStorageContext from '../../contexts/AuthStorageContext';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor:  theme.appBar.backgroundColor,
        display: 'flex',
        flexDirection: 'row'
    },
});

const AppBar = () => {
    const { data } = useQuery(GET_AUTHORIZED_USER);
    const authStorage = useContext(AuthStorageContext);
    const apolloClient = useApolloClient();

    const signOut = async () => {
        await authStorage.removeAccessToken();
        await apolloClient.resetStore();
    };

    const signedInOut = data && data.authorizedUser 
        ? <>
            <Link to="/createareview" component={AppBarTab}>Create a review</Link>
            <Link to="/myreviews" component={AppBarTab}>My Reviews</Link>
            <AppBarTab onPress={signOut}>Sign Out</AppBarTab>
        </>
        : <>
            <Link to="/signin" key='singin' component={AppBarTab}>Sign In</Link>
            <Link to="/signup" key='singup' component={AppBarTab}>Sign Up</Link>
        </>;

    return <View style={styles.container}>
        <ScrollView horizontal>
            <Link to="/" component={AppBarTab}>Repositories</Link>
            {signedInOut}
        </ScrollView>
    </View>;
};

export default AppBar;

