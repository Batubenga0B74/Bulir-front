import axios from "axios";

const REMOTE_DATABASE_PATH = "https://chaleng-bulir.onrender.com"
const LOCAL_DATABASE_PATH = "http://localhost:3333"

export const api = axios.create({
    baseURL: REMOTE_DATABASE_PATH
})
