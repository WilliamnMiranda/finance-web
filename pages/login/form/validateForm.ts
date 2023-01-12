import * as yup from "yup";

const validateLogin = yup
	.object({
		email: yup.string().required("Digite seu email"),
		password: yup.string().required("Digite sua senha"),
	})
	.required();

export default validateLogin;
