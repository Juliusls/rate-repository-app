import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import theme from '../../utils/theme';
import { formatDate } from '../../utils/helpers';

const windowWidth = Dimensions.get('window').width;

const ReviewItem = ({ review, buttons, viewRepo, deleteRepo }) => {
    
    return (
        <View style={cardStyles.reviewMainContainer}>
            <View key={review?.node.id} style={cardStyles.reviewContainer}>
                <View style={cardStyles.cicle}>
                    <Text style={cardStyles.circleText} >{review?.node.rating}</Text>
                </View>
                <View style={cardStyles.topContainer}>
                    <View>
                        <Text style={cardStyles.primaryText}>{review?.node.user.username}</Text>
                    </View>
                    <View>
                        <Text style={cardStyles.greyText}>{formatDate(review?.node.createdAt)}</Text>
                    </View>
                    <View>
                        <Text style={cardStyles.reviewText}>{review?.node.text}</Text>
                    </View>
                </View>
            </View>
            {buttons && 
                <View style={cardStyles.buttonContainer}>
                    <TouchableOpacity onPress={() => viewRepo(review?.node.repositoryId)} style={cardStyles.viewButton}>
                        <Text style={cardStyles.buttonsText}>View repository</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteRepo(review?.node.id)} style={cardStyles.deleteButton}>
                        <Text style={cardStyles.buttonsText}>Delete review</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    );
};
export default ReviewItem;


const cardStyles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsText: {
        color: 'white',
        fontWeight: theme.fontWeights.bold,
        textAlign: 'center',
        fontSize: 15 ,
    },
    viewButton: {
        backgroundColor: '#1f60eb',
        borderRadius: 5,
        flex: 1,
        margin: 5,
        padding: 10,
    },
    deleteButton: {
        backgroundColor: '#d5384c',
        borderRadius: 5,
        flex: 1,
        margin: 5,
        padding: 10,
    },
    topContainer: {
        paddingLeft: 10,
        display: 'flex',
        flexDirection: 'column',
    },
    reviewMainContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        backgroundColor: 'white'
    },
    reviewContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    primaryText: {
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.body,
        paddingBottom: 8
    },
    greyText: {
        color: theme.colors.textGrey,
        fontSize: theme.fontSizes.body,
        paddingBottom: 10,
        flex: 1,
        flexWrap: 'wrap'
    },
    reviewText: {
        flexDirection: 'row',
        width: (windowWidth - theme.circle.width - 6) * 0.90
    },
    cicle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 3,
        borderColor: theme.colors.primary,
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'row',
    },
    circleText: {
        color: theme.colors.primary,
        fontWeight: theme.fontWeights.bold,
    },
});