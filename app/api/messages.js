import client from "./client";

const endPoint = "/messages"
const subEndPoints = Object.freeze({
    ROOMS: "/room"
})

const getMessages = () => client.get(endPoint);

const getRoomMessages = roomId => client.get(endPoint + subEndPoints.ROOMS + roomId);

const sendMessage = data => client.post(endPoint, data)

export default {
    getMessages,
    getRoomMessages,
    sendMessage
}