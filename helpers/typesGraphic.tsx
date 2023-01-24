import { FaGamepad, FaMusic, FaGift, FaPlane, FaCut, FaCoffee, FaMedkit, FaGraduationCap, FaShoppingCart } from 'react-icons/fa';

export const IconsItem: { [key: string]: any } = {
	Games: { icon: <FaGamepad />, color: "#616382" },
	Musica: { icon: <FaMusic />, color: "yellow" },
	Presente: { icon: <FaGift />, color: "green" },
	Viagem: { icon: <FaPlane />, color: "#66245b" },
	Beleza: { icon: <FaCut />, color: "pink" },
	Comida: { icon: <FaCoffee />, color: "#a8c4a2" },
	Saude: { icon: <FaMedkit />, color: "orange" },
	Estudos: { icon: <FaGraduationCap />, color: "#69a5a4" },
	Mercado: { icon: <FaShoppingCart />, color: "brown" },
};
