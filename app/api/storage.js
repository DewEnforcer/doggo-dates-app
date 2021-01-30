import AsyncStorage from "@react-native-async-storage/async-storage";

const prefix = "cache_";

const storeData = async (key, data) => {
    try {
        await AsyncStorage.setItem(prefix + key, JSON.stringify(data));
    } catch (error) {
        console.log("An error has occured during storeData", error);
        return null;
    }
}

const getData = async key => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (error) {
        console.log("An error has occured during getData", error);
        return null;
    }
}

export default {
    storeData,
    getData
}