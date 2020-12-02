import React, { useState } from 'react';
import { Button, Menu } from 'react-native-paper';
import { View } from 'react-native';

const OrderSelection = ({setValueForQuery}) => {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    
    const [selectedValue, setSelectedValue] = useState('Select filter');

    const onLatestRepositories = () => {
        setSelectedValue("Latest repositories");
        setValueForQuery(["CREATED_AT", "DESC"]);
        setVisible(false);
    };
    const onHighestratedrepositories = () => {
        setSelectedValue("Highest rated repositories");
        setValueForQuery(["RATING_AVERAGE", "DESC"]);
        setVisible(false);
    };
    const onLowestratedrepositories = () => {
        setSelectedValue("Lowest rated repositories");
        setValueForQuery(["RATING_AVERAGE", "ASC"]);
        setVisible(false);
    };

    return (
        <>
            <View
                style={{
                    marginBottom: 10,
                    marginHorizontal: 10,
                    flexDirection: 'row',
                    backgroundColor: '#e1e4e8',
                    borderRadius: 5,
                    justifyContent: 'center',
                }}>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<Button onPress={openMenu}>{selectedValue}</Button>}>
                    <Menu.Item onPress={() => onLatestRepositories()} title="Latest repositories" />
                    <Menu.Item onPress={() => onHighestratedrepositories()} title="Highest rated repositories" />
                    <Menu.Item onPress={() => onLowestratedrepositories()} title="Lowest rated repositories" />
                </Menu>
            </View>
        </>
    );
};

export default OrderSelection;
