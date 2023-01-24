import styled from "styled-components";

interface ItemLastTransaction {
	type: string;
}
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

export const LastTransactions = styled(cardMain)`
	padding: 10px;
`;
export const ContainertemsLastTransactions = styled.section`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	grid-auto-flow: row;
	gap: 20px;
`;
export const TittleTable = styled.th`
	text-align: start;
`;
export const ItemLastTransaction = styled.div<ItemLastTransaction>`
	display: flex;
	width: 100%;
	height: 50px;
	background-color: red;
	border: none;
	border-left: ${({ type }) =>
		type === "Expense" ? "4px solid red" : "4px solid green"};
`;
