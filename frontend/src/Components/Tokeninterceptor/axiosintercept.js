import axios from "axios";

const apiurl = "http://localhost:3001"
const accessToken = localStorage.getItem("token2")

export const authaxios = axios.create({
    baseURL: apiurl,
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
})