interface IProps {
	color: {
		primary: {
			main: string;
		};
	};
	background: {
		dark: string;
		default: string;
	};
}

const Theme: IProps = {
	color: {
		primary: {
			main: "#006AFF",
		},
	},
	background: {
		dark: "#1A1919",
		default: "#F8F7F1",
	},
};

export default Theme;
