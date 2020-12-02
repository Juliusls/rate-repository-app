import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from "react-router-native";
import { CREATE_REVIEW } from '../../graphql/mutations';
import CreateReviewContainer from './CreateReviewContainer';

const CreateReview = () => {
    const [createReview] = useMutation(CREATE_REVIEW);
    let history = useHistory();

    const onSubmit = async (values) => {
        const formattedInput = { ...values, rating: Number(values.rating) };
        console.log('formattedInput', formattedInput);

        try {
            const { data } = await createReview({variables: formattedInput });
            history.push(`/${data.createReview.repositoryId}`);
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <CreateReviewContainer onSubmit={onSubmit}/>
    );
};
  
export default CreateReview;