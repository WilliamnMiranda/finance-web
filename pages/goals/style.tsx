import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	background-color: white;
  padding:5px 10px;
	box-shadow: 0px 8px 24px rgba(69, 69, 80, 0.1);
	border-radius: 8px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`
export const HeaderGoal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.default};
  font-weight: 500;
  font-size: 1.3em;
  padding: 10px 0px;
  margin-bottom: 10px;
  svg{
    font-size: 1.2em;
    cursor: pointer;
    color:#1a87dd; 
  }
`
export const ModelGoal = styled.div`
    width: 49%;
    padding: 10px;
    height: 100%;
`
export const Goals = styled(ModelGoal)`
  border-right: 1px solid rgba(0,0,0,0.2);
`
export const GoalsGroup = styled(ModelGoal)`
`
export const ContainerGoals = styled.div`
  display: flex;
  flex-direction: column;
  gap:15px;
`
