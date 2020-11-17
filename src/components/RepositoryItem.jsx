import React from 'react';
import Text from './Text';
import { View, Image, StyleSheet } from 'react-native';
import theme from '../theme';


const cardTopStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
    containerSmall: {
        paddingLeft: 10,
        display: 'flex',
        flexDirection: 'column',
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 5
    },
    nameText: {
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.body,
        paddingBottom: 8
    },
    textFlex: {
        width: 250,
        flexDirection:'row'
    },
    descriptionText: {
        color: theme.colors.textGrey,
        fontSize: theme.fontSizes.body,
        paddingBottom: 10,
        flex: 1,
        flexWrap: 'wrap'
    },
    languageText: {
        padding: 5,
        color: 'white',
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 5,
    }
});

const CardTopPart = ({ repo }) => {
    return (
        <View style={cardTopStyles.container}>
            <View>
                <Image 
                    source={{uri: repo.ownerAvatarUrl,}}
                    style={cardTopStyles.image}
                >
                </Image>
            </View>
            <View style={cardTopStyles.containerSmall}>
                <View>
                    <Text style={cardTopStyles.nameText}>{repo.fullName}</Text>
                </View>
                <View style={cardTopStyles.textFlex}>
                    <Text style={cardTopStyles.descriptionText}>{repo.description}</Text>
                </View>
                <View>
                    <Text style={cardTopStyles.languageText}>{repo.language}</Text>
                </View>
            </View>
        </View>
    );
};

const cardBottomStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    containerBig: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 20
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
    },
});


const CardBottomPart = ({ repo }) => {

    const toThousands = (value) => {
        return value >= 1000 
            ? `${Math.round(value/100)/10}k`
            : value;
    };

    return (
        <View style={cardBottomStyles.containerBig}>
            <View style={cardBottomStyles.container}>
                <Text style={cardBottomStyles.numbersText}>{toThousands(repo.stargazersCount)}</Text>
                <Text style={cardBottomStyles.labelsText}>Stars</Text>
            </View>
            <View style={cardBottomStyles.container}>
                <Text style={cardBottomStyles.numbersText}>{toThousands(repo.forksCount)}</Text>
                <Text style={cardBottomStyles.labelsText}>Forks</Text>
            </View>
            <View style={cardBottomStyles.container}>
                <Text style={cardBottomStyles.numbersText}>{toThousands(repo.reviewCount)}</Text>
                <Text style={cardBottomStyles.labelsText}>Reviews</Text>
            </View>
            <View style={cardBottomStyles.container}>
                <Text style={cardBottomStyles.numbersText}>{toThousands(repo.ratingAverage)}</Text>
                <Text style={cardBottomStyles.labelsText}>Ratings</Text>
            </View>
        </View>
    );
};

const RepositoryItemStyles = StyleSheet.create({
    container: {
        padding: 20,
    }
});

const RepositoryItem = ({ repo }) => {
    return (
        <View key={repo.id} style={RepositoryItemStyles.container}>
            <CardTopPart repo={repo}/>
            <CardBottomPart repo={repo}/>
        </View>
    );
};

export default RepositoryItem;