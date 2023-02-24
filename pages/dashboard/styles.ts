import styled from "styled-components";

interface ItemLastTransaction {
	type: string;
}
export const Container = styled.div`
	display: flex;
	gap: 20px;
	height: 100%;
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		flex-direction: column;
		height: auto;
	}
`;
export const ContainerMain = styled.div`
	background-color: white;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 20px 25px;
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		height: auto;
		padding: 0px 0px;
	}
`;
export const cardMain = styled.section`
	background: #ffffff;
	box-shadow: 0px 8px 24px rgba(69, 69, 80, 0.1);
`;

export const LastTransactions = styled(cardMain)`
	height: 43%;
	padding: 20px;
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		padding: 0px 0px;
		height: auto;
	}
`;
export const ContainertemsLastTransactions = styled.section`
	width: 100%;
	display: flex;
	flex-direction: row;
	gap: 1%;
	align-items: flex-start;
	justify-content: flex-start;
	flex-wrap: wrap;
	height: 95%;
	max-height: 95%;
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		flex-direction: column;
		max-height: auto;
	}
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
	margin-bottom: 10px;
	box-shadow: 0px 8px 24px rgba(69, 69, 80, 0.1);
	border-left: ${({ type }) =>
		type === "Expense" ? "4px solid red" : "4px solid green"};
	p {
		color: ${({ type }) => (type === "Expense" ? "red" : "green")};
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		width: 100%;
		flex-direction: column;
		gap: 10px;
		height: auto;
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
	font-size: 0.9em;
`;

export const ContainerTypeAndDate = styled.div`
	display: flex;
	align-items: center;
	font-family: ${({ theme }) => theme.fonts.default};
	font-weight: 500;
	width: 59%;
	justify-content: space-between;
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		width: 100%;
	}
`;

export const ContainerTypeAndIcon = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const ContainerValue = styled.p`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: end;
	font-family: ${({ theme }) => theme.fonts.default};
	font-weight: 400;
`;
export const ContainerDate = styled.div`
	font-family: ${({ theme }) => theme.fonts.default};
`;
export const ContainerIconType = styled.div<ItemLastTransaction>`
	color: ${({ type }) => (type === "Expense" ? "red" : "green")};
	position: relative;
	display: flex;
	align-items: center;
`;
export const ContainerTittle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 10px;
`;
export const ButtonAddTransaction = styled.button`
	height: 40px;
	background-color: #4151e0;
	border-radius: 8px;
	padding: 10px;
	color: white;
	font-family: ${({ theme }) => theme.fonts.default};
	font-size: 0.7em;
	text-transform: uppercase;
`;
export const Tittle = styled.h2`
	font-family: ${({ theme }) => theme.fonts.default};
	font-weight: 600;
	margin-bottom: 12px;
	font-size: 1em;
	color: #1a1919;
	position: relative;
	left: 3px;
`;
export const ContainerGraphicLine = styled.div`
	width: 100%;
	height: 54%;
	display: flex;
	flex-direction: column;
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		height: auto;
	}
`;
export const ContainerInfoTransaction = styled.div`
	width: 23%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		width: 100%;
		padding: 0px 5px;
	}
`;
