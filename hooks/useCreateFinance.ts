import {
	QueryClient,
	useMutation,
	useQueryClient,
} from "@tanstack/react-query";
import { set } from "immer/dist/internal";
import { useContext, useRef, useState } from "react";
import { toast } from "react-toastify";
import { ModalContext } from "../contexts/ModalContext";
import financesServices from "../services/finances";
import { ICreateFinance } from "../types/finances";

const useCreateContext = () => {
	const [type, setType] = useState("");
	const [valueFinance, setValueFinance] = useState("");
	const [selectedCategory, setCategory] = useState("");
	const [checked, onChange] = useState(false);
	const error = useRef(false);
	const { setTypeModal } = useContext(ModalContext);
	const queryClient = useQueryClient();
	const description = "adsad";
	const card = null;
	const resetInfos = () => {
		setType("");
		setValueFinance("");
		setCategory("");
		onChange(false);
		setTypeModal(null, "close");
	};
	const mutation = useMutation(
		(data: ICreateFinance) => financesServices.create(data),
		{
			onSuccess() {
				toast.success("Transacao criada com sucesso", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
				queryClient.invalidateQueries({ queryKey: ["typeOfChartsItems"] });
				queryClient.invalidateQueries({ queryKey: ["finances"] });
				queryClient.invalidateQueries({ queryKey: ["dataLastFinances"] });
				queryClient.invalidateQueries({
					queryKey: ["dataFinancesOfTheLastSixMonths"],
				});
				resetInfos();
			},
			onError() {
				console.log("error");
			},
		},
	);

	const newTransaction = async () => {
		if (type === "" || valueFinance === "" || selectedCategory === "") {
			toast.error("preencha todos os campo", {
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			return;
		}
		const data = {
			value: valueFinance,
			type,
			category: selectedCategory,
			name: "aaaa",
		};
		mutation.mutate(data);
	};

	return {
		type,
		setType,
		valueFinance,
		setValueFinance,
		selectedCategory,
		setCategory,
		checked,
		onChange,
		newTransaction,
	};
};

export default useCreateContext;
