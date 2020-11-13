import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import { Link } from 'react-router-native';


const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor:  theme.appBar.backgroundColor,
        display: 'flex',
        flexDirection: 'row'
    },
});

const AppBar = () => {
    return <View style={styles.container}>
        <ScrollView horizontal>
            <Link to="/" component={AppBarTab}>Repositories</Link>
            <Link to="/signin" component={AppBarTab}>SignIn</Link>
        </ScrollView>
    </View>;
};

export default AppBar;

