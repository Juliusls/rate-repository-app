import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Text from './Text';
import theme from '../utils/theme';
import { toThousands } from '../utils/helpers';
import GithubButton from './SingleRepository/GithubButton';

const windowWidth = Dimensions.get('window').width;

const RepositoryInfo = ({ repository, singleRepo }) => {

    return (
        <>
            <View key={repository?.id} style={cardStyles.mainContainer}>
                <View style={cardStyles.topContainer}>
                    <View>
                        <Image 
                            source={{uri: repository?.ownerAvatarUrl,}}
                            style={cardStyles.image}
                        >
                        </Image>
                    </View>
                    <View style={cardStyles.topContainerSmall}>
                        <View>
                            <Text testID={`${repository.id}/fullName`} style={cardStyles.primaryText}>{repository?.fullName}</Text>
                        </View>
                        <View style={cardStyles.descriptionText}>
                            <Text testID={`${repository.id}/description`} style={cardStyles.greyText}>{repository?.description}</Text>
                        </View>
                        <View style={cardStyles.languageView}>
                            <Text testID={`${repository.id}/language`} style={cardStyles.languageText}>{repository?.language}</Text>
                        </View>
                    </View>
                </View>
                <View style={cardStyles.bottomContainerBig}>
                    <View style={cardStyles.bottomContainer}>
                        <Text testID={`${repository.id}/stargazersCount`} style={cardStyles.numbersText}>{toThousands(repository?.stargazersCount)}</Text>
                        <Text style={cardStyles.labelsText}>Stars</Text>
                    </View>
                    <View style={cardStyles.bottomContainer}>
                        <Text testID={`${repository.id}/forksCount`} style={cardStyles.numbersText}>{toThousands(repository?.forksCount)}</Text>
                        <Text style={cardStyles.labelsText}>Forks</Text>
                    </View>
                    <View style={cardStyles.bottomContainer}>
                        <Text testID={`${repository.id}/reviewCount`} style={cardStyles.numbersText}>{toThousands(repository?.reviewCount)}</Text>
                        <Text style={cardStyles.labelsText}>Reviews</Text>
                    </View>
                    <View style={cardStyles.bottomContainer}>
                        <Text testID={`${repository.id}/ratingAverage`} style={cardStyles.numbersText}>{toThousands(repository?.ratingAverage)}</Text>
                        <Text style={cardStyles.labelsText}>Ratings</Text>
                    </View>
                </View>
                {singleRepo && 
                <GithubButton repository={repository}/>
                }
            </View>
            {singleRepo && 
                <View style={{height: 10, backgroundColor: '#e1e4e8'}} />
            }
        </>
    );
};

export default RepositoryInfo;

const cardStyles = StyleSheet.create({
    descriptionText: {
        flexDirection: 'row',
        width: (windowWidth - 60) * 0.85
    },
    mainContainer: {
        padding: 20,
        backgroundColor: 'white'
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    topContainerSmall: {
        paddingLeft: 10,
        display: 'flex',
        flexDirection: 'column',
    },
    bottomContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    bottomContainerBig: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 20
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 5
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
    languageText: {
        padding: 5,
        color: 'white',
        alignSelf: 'flex-start',
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
    },
    numbersText: {
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.body,
        alignSelf: 'center',
    },
    labelsText: {
        color: theme.colors.textGrey,
        fontSize: theme.fontSizes.subheading,
        alignSelf: 'center',
    }
});

