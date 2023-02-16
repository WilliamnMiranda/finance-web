import axios from "axios";
import { parseCookies } from "nookies";
export const api = axios.create({
	baseURL: "http://localhost:8081",
});

api.interceptors.request.use(
	async (config) => {
		const { ["finance.token"]: token } = parseCookies();
		if (token) {
			config.headers!["x-access-token"] = token;
		}
		return config;
	},
	(error) => {
		return Promise.reject("aaaaaaaaaaaaaaaaab");
	},
);
