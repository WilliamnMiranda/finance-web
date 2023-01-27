import { useCallback, useEffect, useState } from "react";
export const useWidthGraphic = () => {
	const [currentWidth, setCurrentWidth] = useState(0);
	const [width, setWidth] = useState(1200);
	const [offSet, setOffSet] = useState(30);

	const alterWidthScreen = (width: number, offSet: number = 30) => {
		setWidth(width);
		setOffSet(offSet);
	};
	const getWidthScreen = () => {
		console.log(window.innerWidth);
		const widthScreen = window.innerWidth;
		if (widthScreen <= 1490) alterWidthScreen(900);
		if (widthScreen <= 1300) alterWidthScreen(700);
		if (widthScreen <= 800) alterWidthScreen(400, 10);
	};

	useEffect(() => {
		window.addEventListener("resize", getWidthScreen);
	}, []);
	return {
		width,
		offSet,
	};
};
