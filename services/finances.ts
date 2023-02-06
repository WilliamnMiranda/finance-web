import { api } from "../helpers/Api";
import { ICreateFinance } from "../types/finances";

const financesServices = {
	getByTypeAndCurrentMonth: async () => {
		const finance = await (
			await api.get("/transaction/getbytype/currentmonth")
		).data;
		return finance;
	},
	getChartByType: async function () {
		const month = new Date().getMonth() + 1;
		const year = new Date().getFullYear();
		return await (
			await api.get("/aggregation/getbytype", {
				params: { month, year },
			})
		).data.data;
	},
	create: async function (data: ICreateFinance) {
		return await api.post("/transaction/create", data);
	},
	lastFinances: async function () {
		return await (
			await api.post("http://localhost:8081/transaction/last")
		).data;
	},
	getByLastMonths: async function () {
		return await (
			await api.get("http://localhost:8081/aggregation/getByLastMonths")
		).data;
	},
};

export default financesServices;
