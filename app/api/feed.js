import client from "./client";

const endPoint = "/feed";

const getFeed = () => client.get(endPoint);

export default {
    getFeed
}