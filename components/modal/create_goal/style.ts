import styled from "styled-components";

export const Container = styled.div`
	border-radius: 15px;
	width: 500px;
	background-color: white;
	padding: 20px;
	z-index: 100000000000000000000000000;
`;
export const IconInput = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-right: none;
	height: 40px;
	padding: 0px 7px;
`;
export const ContainerValue = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
`;

export const ContainerInput = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	margin-top: 10px;
`;

export const InputText = styled.input`
	width: 100%;
	height: 40px;
	outline: none;
	z-index: 100;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-left: none;
	font-family: ${({ theme }) => theme.fonts.default};
	font-weight: 500;
	font-size: 1.3em;
`;

export const Label = styled.div`
	font-family: ${({ theme }) => theme.fonts.default};
	font-weight: 400;
`;
