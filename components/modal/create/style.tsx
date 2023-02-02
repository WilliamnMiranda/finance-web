import styled from 'styled-components'
interface ISelectedButton {
  type: string
}
export const Container = styled.div`
  border-radius: 15px;
  width: 600px;
  background-color: white;
  padding: 20px;
  z-index: 100000000000000000000000000;
`
export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    svg{
      cursor: pointer;
      font-size: 1.5em;
    }
`
export const InputText = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  z-index: 100;
`

export const ContainerTypeTransaction = styled.div<ISelectedButton>`
  display: flex;
  flex-direction: column;
  gap:10px;
  margin-bottom: 15px;
  button:nth-child(1){
    background-color: ${({ type }) => type === 'Deposit' && '#1a87dd'};
    color: ${({ type }) => type === 'Deposit' && 'white'};
  }
  button:nth-child(2){
    background-color: ${({ type }) => type === 'Expense' && '#1a87dd'};
    color: ${({ type }) => type === 'Expense' && 'white'};
  }
`

export const ContainerOptions = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Label = styled.div`
  font-family: ${({ theme }) => theme.fonts.default};
  font-weight: 400;
`
export const Type = styled.button`
  height: 50px;
  border-radius: 10px;
  background-color: #cccdcd;
  align-items: center;
  justify-content: center;
  width: 49%;
  font-family: ${({ theme }) => theme.fonts.default};
  font-weight: 500;
`
export const ContainerTypes = styled.section`
display: flex;
flex-direction: column;
margin-bottom: 15px;
`
export const ListTypes = styled.div`
display: flex;
flex-wrap: wrap;
gap:10px;
margin-top: 15px;
`