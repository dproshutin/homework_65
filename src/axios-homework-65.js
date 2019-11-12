import axios from 'axios';

const instance = axios.create({
    baseURL: "https://homework-65-77644.firebaseio.com"
});

export default instance;