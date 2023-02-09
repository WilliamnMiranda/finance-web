import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	background-color: white;
  padding:5px 0px;
	box-shadow: 0px 8px 24px rgba(69, 69, 80, 0.1);
	border-radius: 8px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`
export const HeaderGoal = styled.div`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.default};
  font-weight: 500;
  font-size: 1.3em;
  margin-bottom: 10px;
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
