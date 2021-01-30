import {create} from "apisauce";
import storage from "./storage";

const client = create({
    baseURL: "http://localhost:4000/api", //change to env var
})

const get = client.get;

client.get = async (url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig);

    if (response.ok) await storage.storeData(url, response.data);

    if (!response.ok) {
        const cachedData = await storage.getData(url);
        if (cachedData) return {ok: true, data: cachedData};
    }
    
    return response;
}

export default client;