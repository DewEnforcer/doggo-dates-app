import * as SecureStore from 'expo-secure-store';
import jwtDecode from "jwt-decode";

const key = "AUTH_TOKEN";

const storeToken = async token => {
    try {
        return await SecureStore.setItemAsync(key, token);
    } catch (error) {
        console.log("An error has occured during storeToken", error);
        return null;
    }
}

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key);
    } catch (error) {
        console.log("An error has occured during getToken", error);
        return null;
    }
}

const removeToken = async () => {
    try {
        return await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log("An error has occured during removeToken", error);
        return null;
    }
}

const getUser = async () => {
    const token = await getToken();
    if (token) return jwtDecode(token);

    return null;
}

export default {
    storeToken,
    getToken,
    removeToken,
    getUser
}