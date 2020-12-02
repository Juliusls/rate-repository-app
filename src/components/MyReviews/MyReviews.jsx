import React from 'react';
import { FlatList, Alert } from 'react-native';
import ReviewItem from '../SingleRepository/ReviewItem';
import useGetAuthorizedUser from '../../hooks/useGetAuthorizedUser';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { DELETE_REVIEW } from '../../graphql/mutations';
import ItemSeparator from '../ItemSeparator';

const MyReviews = () => {
    const { data, review, fetchMore, refetch } = useGetAuthorizedUser();
    const [ deleteReview ] = useMutation(DELETE_REVIEW);
    const history = useHistory();

    if (data && data.authorizedUser) {
        console.log('review item', data.authorizedUser.reviews);
    }

    const onEndReach = () => {
        fetchMore();
    };

    const handleDelete = async (id) => {
        console.log('id from handle delete: ', id);
        try {
            await deleteReview({variables: { id: id }});
            await refetch();
        } catch (e) {
            console.log(e);
        }
    };

    const viewRepo = (id) => {
        history.push(`/${id}`);
    };

    const deleteRepo = (id) => {
        Alert.alert(
            "Delete review",
            "Are you sure you want to delete this review?",
            [
                {
                    text: "CANCEL",
                    onPress: () => console.log("cancel pressed"),
                    style: "cancel"
                },
                {
                    text: "DELETE",
                    onPress: () => handleDelete(id),
                },
            ],
            { cancelable: true }
        );
    };

    return (
        <FlatList
            data={review}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={({ node: { id } }) => id}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
            renderItem={({ item }) => <ReviewItem review={item} buttons={true} viewRepo={viewRepo} deleteRepo={deleteRepo}/>}
        />
    );
};

export default MyReviews;
