import styled from "styled-components";

export const Container = styled.section`
	height: 100%;
	width: 300px;
	background-color: red;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 10px;
`;

export const Card = styled.article`
	width: 100%;
	background-color: white;
	padding: 20px;
`;
export const Incomes = styled(Card)`
	height: 22%;
`;

export const Expences = styled(Card)`
	height: 22%;
`;

export const Graphic = styled(Card)`
	height: 40%;
`;
export const NameHeader = styled.h2`
	font-size: 1.3em;
	color: #656575;
`;
