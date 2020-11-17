import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
    constructor(namespace = 'auth') {
        this.namespace = namespace;
    }

    async getAccessToken() {
        try {
            const value = await AsyncStorage.getItem(`${this.namespace}:user`);
            if(value !== null) {
                return value;
            }
        } catch(e) {
            console.log(e);
        }
    }

    async setAccessToken (accessToken) {
        try {
            await AsyncStorage.setItem(`${this.namespace}:user`, accessToken);
        } catch (e) {
            console.log(e);
        }
        console.log('done');
    }

    async removeAccessToken() {
        try {
            await AsyncStorage.removeItem(`${this.namespace}:user`);
        } catch(e) {
            console.log(e);
        }
        console.log('Done.');
    }
}

export default AuthStorage;
