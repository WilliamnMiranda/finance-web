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
	padding: 20px;
	height: 40%;
`;
export const ContainertemsLastTransactions = styled.section`
	width: 100%;
	display: flex;
	flex-direction: row;
	gap: 1%;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;
	height: 95%;
`;
export const TittleTable = styled.th`
	text-align: start;
`;
export const ItemLastTransaction = styled.div<ItemLastTransaction>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 49%;
	padding: 10px;
	height: 50px;
	border: none;
	box-shadow: 0px 8px 24px rgba(69, 69, 80, 0.1);
	border-left: ${({ type }) =>
		type === "Expense" ? "4px solid red" : "4px solid green"};
	p {
		color: ${({ type }) => (type === "Expense" ? "red" : "green")};
	}
`;

export const ContainerIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 30px;
	width: 30px;
	background-color: grey;
	border-radius: 50%;
	background-color: grey;
	font-size: 0.9em;
`;

export const ContainerType = styled.div`
	display: flex;
	align-items: center;
	font-family: ${({ theme }) => theme.fonts.default};
	gap: 10px;
	font-weight: 500;
	width: 33%;
`;
export const ContainerValue = styled.p`
	width: 22%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: end;
	font-family: ${({ theme }) => theme.fonts.default};
	font-weight: 400;
`;
export const ContainerDate = styled.div`
	font-family: ${({ theme }) => theme.fonts.default};
	width: 26%;
`;
export const ContainerIconType = styled.div<ItemLastTransaction>`
	color: ${({ type }) => (type === "Expense" ? "red" : "green")};
`;
export const Tittle = styled.h2`
	font-family: ${({ theme }) => theme.fonts.default};
	font-weight: 600;
	margin-bottom: 10px;
	font-size: 1em;
	color: #1a1919;
	position: relative;
	left: 3px;
`;
