import styled from "styled-components";

export const Container = styled.main`
	display: flex;
	width: 100%;
	height: 100vh;
`;
export const Aside = styled.aside`
	width: 250px;
	background-color: ${({ theme }) => theme.background.dark};
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
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
export const Item = styled.section``;
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
