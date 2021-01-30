import client from "./client";

const endPoint = "/users";
const subEndPoints = Object.freeze({
    SETTINGS: "/settings"
})

const signUp = data => client.post(endPoint, data);

const getSettings = () => client.get(endPoint + subEndPoints.SETTINGS);

const saveSettings = data => {
    const formData = new FormData();
    Object.keys(data).forEach( k=> {
        const p = data[k];
        if (!Array.isArray(p)) return formData.append(k, p);
        p.forEach( (val, i) => formData.append(k, {
            name: `image${i}`,
            type: "image/jpeg",
            uri: val
        }))
    })

    client.patch(endPoint + subEndPoints.SETTINGS, formData)
}

export default {
    signUp,
    getSettings,
    saveSettings
}
