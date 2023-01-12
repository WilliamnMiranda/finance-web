import styled from "styled-components";

interface IInputForm {
  error: boolean
}
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;  
  width: 100%;
  padding: 20px;
  p , span{
    color: #B1B2B5;
    font-size: 0.9em;
  }
  p{
    cursor: pointer;
  }
`;
export const InputForm = styled.input`
  background-color: rgba(234,240,247,1);
  height: 50px;
  padding: 10px;
  border: none;
  outline: none;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 5px;
`;

export const ContainerLoginSocial = styled.section``

export const ContainerInfoLogin = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
`

export const ButtonLogin = styled.button`
  width: 100%;
  height: 50px;
  background-color: rgba(68,97,242);
  border-radius: 10px;
  margin: 20px;
  -webkit-box-shadow: -12px 6px 42px 4px rgba(68,97,242,0.29);
  -moz-box-shadow: -12px 6px 42px 4px rgba(68,97,242,0.29);
  box-shadow: -12px 6px 42px 4px rgba(68,97,242,0.29);
`