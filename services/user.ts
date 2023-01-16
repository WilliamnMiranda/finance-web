import { api } from "../helpers/Api";

const userServices = {
	login: async (data: { email: string; password: string }) => {
		const user = await (await api.post("/access/login", data)).data;
		return user;
	},
};

export default userServices;
