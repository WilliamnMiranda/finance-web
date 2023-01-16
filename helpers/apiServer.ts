import axios from "axios";
import { parseCookies } from "nookies";

const requestFromServer = (ctx: any) => {
	const api = axios.create({
		baseURL: "http://192.168.0.53:8081",
	});

	api.interceptors.request.use(
		async (config) => {
			const { ["finance.token"]: token } = parseCookies(ctx);
			if (token) {
				config.headers!["x-access-token"] = token;
			}
			return config;
		},
		(error) => {
			return Promise.reject("aaaaaaaaaaaaaaaaab");
		},
	);

	return api;
};

export default requestFromServer;
