import styled from "styled-components";

export const Container = styled.main`
	display: flex;
	width: 100%;
	min-height: 100vh;
	background-color: ${({ theme }) => theme.background.default};
	@media (max-width: 780px) {
		flex-direction: column;
	}
`;

export const Aside = styled.aside`
	width: 250px;
	background-color: ${({ theme }) => theme.background.dark};
	display: flex;
	flex-direction: column;
	padding: 10px;
	@media (max-width: 780px) {
		width: 100%;
	}
`;

export const ContainerMenu = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media (max-width: 780px) {
		padding: 20px;
		justify-content: flex-start;
		position: fixed;
		z-index: 100000;
		left: 0px;
		background-color: ${({ theme }) => theme.background.dark};
		width: 100%;
		height: 100%;
	}
`;

export const Children = styled.section``;
export const Navigation = styled.section`
	margin-top: 10px;
	width: 100%;
	margin-top: 30px;
`;
export const ListNavigation = styled.section`
	display: flex;
	flex-direction: column;
	gap: 25px;
	color: rgba(255, 255, 255, 0.7);
`;
export const Item = styled.li`
	color: rgba(255, 255, 255, 0.6);
	font-family: ${({ theme }) => theme.fonts.default};
	font-weight: 400;
`;
export const ContainerInfomartionUser = styled.section`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	gap: 10px;
`;
export const Avatar = styled.article`
	height: 100px;
	width: 100px;
	border-radius: 50%;
	background-color: blue;
`;
export const Name = styled.p`
	color: rgba(255, 255, 255, 0.8);
`;

export const MenuMobile = styled.div`
	display: none;
	font-size: 1.5em;
	color: white;
	@media (max-width: 750px) {
		display: block;
		background-color: red;
	}
`;

export const MenuMobileClose = styled.div`
	font-size: 1.5em;
	color: white;
	width: 100%;
`;
