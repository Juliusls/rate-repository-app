import { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { AUTHORIZE_USER } from '../graphql/mutations';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useHistory } from "react-router-native";
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHORIZE_USER);
    const authStorage = useContext(AuthStorageContext);
    let history = useHistory();
    const apolloClient = useApolloClient();

  
    const signIn = async ({ username, password }) => {
        const { data } = await mutate({ variables: { username, password } });
        if(data && data.authorize) {
            await authStorage.setAccessToken(data.authorize.accessToken);
            await apolloClient.resetStore();
            history.push("/");
        }
        
        return data.authorize.accessToken;
    };
  
    return [signIn, result];
};

export default useSignIn;