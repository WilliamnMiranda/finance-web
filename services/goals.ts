import { api } from "../helpers/Api";

const goalServices = {
	getAll: async () => {
		const goals = await (await api.get("/goal")).data;
		return goals;
	},
};

export default goalServices;
