import axios from 'axios';

const api = axios.create({
	baseURL: 'IP do Expo:Porta aberta pelo NodeJS',
});

export default api;
