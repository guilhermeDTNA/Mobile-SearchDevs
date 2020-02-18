import axios from 'axios';

const api = axios.create({
	baseURL: 'http://192.168.1.104:1234',
});

export default api;