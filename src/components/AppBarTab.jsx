import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    text: {
        color: theme.appBar.whiteText,
        padding: theme.appBar.textPadding,
        fontWeight: theme.appBar.bald
    }
});

const AppBarTab = ({ ...props }) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => {console.log(props);}}>
            <View>
                <Text style={styles.text} {...props}/>
            </View> 
        </TouchableWithoutFeedback>
    );
};

export default AppBarTab;
