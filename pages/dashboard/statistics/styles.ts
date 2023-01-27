import styled from "styled-components";
interface IColorItem {
	color: string;
}
export const Container = styled.section`
	height: 90%;
	width: 350px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 10px 15px;
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		justify-content: normal;
		width: 100%;
		height: auto;
		gap: 10px;
	}
`;
export const MonthStatistics = styled.section`
	h2 {
		font-family: ${({ theme }) => theme.fonts.default};
		font-weight: 400;
	}
	p {
		font-family: ${({ theme }) => theme.fonts.default};
		font-weight: 300;
		font-size: 0.9em;
	}
`;
export const ContainerBody = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const ValueMonth = styled.p`
	font-weight: 700;
	font-size: 1.3em;
	color: "#1150C";
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-family: ${({ theme }) => theme.fonts.default};
`;
export const ComparedToLastMonth = styled.p`
	font-weight: 500;
	font-family: ${({ theme }) => theme.fonts.default};
`;
export const Card = styled.article`
	width: 100%;
	background-color: white;
	padding: 20px;
	box-shadow: 0px 8px 24px rgba(69, 69, 80, 0.1);
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
export const Incomes = styled(Card)`
	height: 18%;
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		height: 25%;
	}
`;

export const Expences = styled(Card)`
	height: 18%;
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		height: 25%;
	}
`;
export const FooterCard = styled.div`
	font-weight: 500;
	font-size: 0.9em;
	color: #525256;
	display: flex;
	justify-content: space-between;
	font-family: ${({ theme }) => theme.fonts.default};
`;
export const Graphic = styled(Card)`
	height: 47%;
	justify-content: flex-start;
`;
export const TittleCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 10px;
	h2 {
		font-size: 1.1em;
		color: #656575;
		font-family: ${({ theme }) => theme.fonts.default};
		font-weight: 400;
	}
	p {
		font-size: 0.7em;
		padding: 7px;
		background-color: #f4f5f7;
		color: #656575;
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
			sans-serif;
	}
	border: none;
	border-bottom: 1px solid rgba(248, 247, 241, 1);
`;

export const ContainerItemsGraphic = styled.div`
	margin-top: 15px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	font-family: ${({ theme }) => theme.fonts.default};
	font-weight: 500;
	font-size: 0.9em;
`;
export const ContainerItemGraphic = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 10px;
`;
export const ColorItem = styled.div<IColorItem>`
	background-color: ${({ color }) => color};
	width: 10px;
	height: 10px;
	border-radius: 50%;
`;
export const ColorAndNameItemGraphic = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;
export const ValueItemGraphic = styled.span`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	width: 100px;
	text-align: end;
`;
