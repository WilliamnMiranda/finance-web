import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	gap: 20px;
	height: 100%;
`;
export const ContainerMain = styled.div`
	background-color: white;
	width: 100%;
	padding: 20px 25px;
`;
export const cardMain = styled.section`
	background: #ffffff;
	box-shadow: 0px 8px 24px rgba(69, 69, 80, 0.1);
`;

export const LastTransactions = styled(cardMain)``;
export const TableItemsLastTransactions = styled.table`
	width: 100%;

	th {
		font-family: ${({ theme }) => theme.fonts.default};
		color: #656575;
		font-weight: 300;
	}
`;
