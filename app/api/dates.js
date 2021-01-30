import client from "./client";

const endPoint = "/dates";

const submitDateResult = data => client.post(endPoint, data);

export default {
    submitDateResult
}