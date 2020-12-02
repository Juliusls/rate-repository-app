// import { useHistory } from "react-router-native";
import { useMutation } from 'react';
import { CREATE_REVIEW } from '../graphql/mutations';


const useCreateReview = () => {
    const [createReview, result] = useMutation(CREATE_REVIEW);
    // let history = useHistory();
    
    const createAReview = async ({ repoOwnerName, repoName, repoRating, repoReview }) => {
        const {data} = await createReview({ variables: { repositoryName: repoOwnerName, ownerName: repoName, rating: repoRating, text: repoReview }});
        if (data) {
            console.log('repo id: ', data.repositoryId);
            console.log('data ', data);
            // history.push(`/${data.repositoryId}`);
        }
        return data;
    };
    return [createAReview, result];

};

export default useCreateReview;