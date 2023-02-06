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
		console.log(data);
		return await api.post("/transaction/create", data);
	},
};

export default financesServices;
