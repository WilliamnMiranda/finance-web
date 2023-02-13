import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext, useRef, useState } from "react";
import { toast } from "react-toastify";
import { ModalContext } from "../contexts/ModalContext";
import goalServices from "../services/goals";
import { ICreateGoal } from "../types/goal";

const useCreateContext = () => {
	const [value, setValue] = useState("");
	const [wallet, setWallet] = useState("");
	const [name, setName] = useState("");
	const error = useRef(false);
	const { setTypeModal } = useContext(ModalContext);
	const queryClient = useQueryClient();
	const resetInfos = () => {
		setName("");
		setValue("");
		setWallet("");
		setTypeModal(null, "close");
	};
	const mutation = useMutation(
		(data: ICreateGoal) => goalServices.create(data),
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
				queryClient.invalidateQueries({ queryKey: ["goals"] });
				resetInfos();
			},
			onError() {
				console.log("error");
			},
		},
	);

	const newTransaction = async () => {
		if (!value || !wallet || name === "") {
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
			value,
			wallet,
			name,
		};
		mutation.mutate(data);
	};

	return {
		newTransaction,
		name,
		wallet,
		value,
		setName,
		setWallet,
		setValue,
	};
};

export default useCreateContext;
