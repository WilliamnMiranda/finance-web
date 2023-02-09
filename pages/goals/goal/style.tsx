import styled from 'styled-components'

interface IProgress {
  percentage: number;
}
export const Container = styled.div`
  width: 100%;
  border-left: 5px solid #1a87dd;
  background-color:rgba(246,246,249,1) ;
  padding: 10px;
`
export const ContainerNameGoal = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: em;
`
export const NameGoal = styled.div`
  margin-bottom: 5px;
  font-size: 1.0em;
`
export const ContainerInfos = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ContainerInfosProgressBar = styled.div`
 display: flex;
 flex-direction: column;
 width: calc(100% - 220px);
 align-items: center;
`
export const ContainerProgress = styled.div`
  height: 30px;
  width: 100%;
  border:1px solid #32CD32;
`
export const Progress = styled.div<IProgress>`
  height: 100%;
  width: ${({ percentage }) => percentage + '%'};
  background-color: #32CD32;
  transition: width 0.5s;
`
export const ProcessPercentage = styled.div`
font-family: ${({ theme }) => theme.fonts.default};
`

export const ContainerButtons = styled.div`
  display: flex;
  gap:10px;
`

export const Button = styled.button`
  width: 100px;
  background-color: ${({ color }) => color};
  color: white;
  border-radius: 5px;
  font-family: ${({ theme }) => theme.fonts.default};
  height: 30px;
`

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
export const ContainerInfoProgress = styled.div`
   display: flex;
 align-items: center;
 gap:10px;
 width: 100% ;
`

export const ContainerNumbersOfGoals = styled.div`
	font-family: ${({ theme }) => theme.fonts.default};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 42px;
  margin-top: 10px;
`
export const ContainerMyValueGoal = styled.div``
export const ContainerMyGoalTotal = styled.div``
