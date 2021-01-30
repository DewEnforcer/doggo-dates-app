import client from "./client";

const endPoint = "/auth";

const logIn = data => client.post(endPoint, data);

export default {
    logIn
}