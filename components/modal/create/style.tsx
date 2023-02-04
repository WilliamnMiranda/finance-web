import styled from 'styled-components'
interface ISelectedButton {
  type: string
}
interface ICheckBox {
  checked: boolean
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
  border:1px solid rgba(0,0,0,0.2);
  border-left: none;
  font-family: ${({ theme }) => theme.fonts.default};
  font-weight: 500;
  font-size: 1.3em;
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
export const IconInput = styled.div`
  display: flex;
  align-items: center;
  border:1px solid rgba(0,0,0,0.2);
  border-right: none;
  height: 40px;
  padding: 0px 7px;
`
export const ContainerValue = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 10px;
`
export const ContainerInstallments = styled.div``
export const CheckboxContainer = styled.div<ICheckBox>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 1px solid grey;
  background: ${props => (props.checked ? '#3CB371' : 'white')};
  position: relative;
  svg{
    font-size: 1em;
    font-weight: bold;
    display: ${props => (props.checked ? 'block' : 'none')};
  }
`;

export const Checkmark = styled.svg<ICheckBox>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${props => (props.checked ? 'block' : 'none')};
`;

export const LabelCheckBox = styled.label`
margin-left: 10px;
font-family: ${({ theme }) => theme.fonts.default};
font-weight: 500;
user-select: none;
`
export const ContainerOptionCheckBox = styled.div`
display: flex;
align-items: center;
margin-top: 15px;
`
export const ContainerInputsInstallments = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`
export const ContainerInputInstallments = styled.div`
  width: 47%;
`