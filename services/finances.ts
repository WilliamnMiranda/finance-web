import { api } from "../helpers/Api";

const financesServices = {
	getByTypeAndCurrentMonth: async () => {
		const finance = await (
			await api.get("/transaction/getbytype/currentmonth")
		).data;

		return finance;
	},
};

export default financesServices;
