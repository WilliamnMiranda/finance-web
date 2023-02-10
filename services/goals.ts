import { api } from "../helpers/Api";

const goalServices = {
	getAll: async () => {
		const goals = await (await api.get("/goal")).data;
		return goals;
	},
	delete: async (id : string) => {
		const goals = await (await api.delete(`/goal/${id}`)).data;
		return goals;
	},
};

export default goalServices;
