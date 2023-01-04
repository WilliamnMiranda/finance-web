import styled from "styled-components";

export const Container = styled.div`
	background-color: rgba(246, 246, 246, 1);
	height: 100vh;
	width: 100%;
`;
export const ContainerAll = styled.section`
	margin: 0 auto;
	background-color: rgba(246, 246, 246, 1);
	height: 100vh;
	width: 100%;
	display: flex;
	padding: 200px 250px;
	@media (max-width: 1200px) {
		flex-direction: column;
		padding: 40px;
		align-items: center;
	}
`;
export const ContainerLogin = styled.div`
	width: 24%;
	height: 100%;
	display: flex;
	background-color: grey;
	@media (max-width: 1200px) {
		height: 100px;
		width: 100%;
	}
`;

export const ContainerIntro = styled.div`
	width: 75%;
	height: 100%;
	display: flex;
	flex-direction: column;
	@media (max-width: 1200px) {
		height: auto;
		width: 100%;
		align-items: center;
	}
`;

export const Text = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const Tittle = styled.h1`
	font-size: 3em;
	font-weight: bold;
`;

export const Description = styled.div`
	z-index: 1;
	font-size: 1.3em;
	p {
		margin-bottom: 7px;
	}
`;

export const ContainerImageLottie = styled.div`
	position: absolute;
	top: 25%;
	height: 500px;
	left: 30%;
	@media (max-width: 1645px) {
		height: 400px;
	}
	@media (max-width: 1200px) {
		position: relative;
		top: 0px;
		width: 400px;
		height: 400px;
		left: -6%;
	}
`;

export const ContainerTittle = styled.div`
	margin-bottom: 40px;
	position: relative;
	z-index: 1;
	&::after {
		content: "";
		background-color: rgba(222, 238, 244, 1);
		position: absolute;
		width: 200px;
		height: 200px;
		border-radius: 50%;
		top: -60%;
		left: -2%;
		filter: blur(25px);
		z-index: -1;
	}
`;
