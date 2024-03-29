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
	fonts: {
		default: string;
	};
	breakpoints: {
		mobile: string;
		desktop: string;
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
	fonts: {
		default: "Inter",
	},
	breakpoints: {
		mobile: "1320px",
		desktop: "1700px",
	},
};

export default Theme;
