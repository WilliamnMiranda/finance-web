import { api } from "../helpers/Api";
import { ICreateGoal } from "../types/goal";

const goalServices = {
	create: async (data: ICreateGoal) => {
		const goal = await (await api.post("/goal/create", data)).data;
		return goal;
	},
	getAll: async () => {
		const goals = await (await api.get("/goal")).data;
		return goals;
	},
	delete: async (id: string) => {
		const goal = await (await api.delete(`/goal/${id}`)).data;
		return goal;
	},
};

export default goalServices;
