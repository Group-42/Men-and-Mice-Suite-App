import {AsyncStorage} from "react-native";

export async function getUserInfo2 () {
    try {
        const value = await AsyncStorage.multiGet(['@user:serverName', '@user:username', '@user:password']);
        console.log(value);
        return value;
    } catch (error) {
        // Handle errors here
        console.log('get user 2: ', error);
    }
}