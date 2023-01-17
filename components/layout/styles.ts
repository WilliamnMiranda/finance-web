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
	align-items: center;
	padding: 10px;
	@media (max-width: 780px) {
		width: 100%;
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
export const Avatar = styled.article`
	height: 100px;
	width: 100px;
	border-radius: 50%;
	background-color: grey;
`;
export const ContainerInfomartionUser = styled.section`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 10px;
`;
export const Name = styled.p`
	color: rgba(255, 255, 255, 0.8);
`;
