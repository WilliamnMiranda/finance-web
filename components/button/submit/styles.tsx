import styled from 'styled-components'

export const ButtonCreate = styled.button`
   height: 50px;
  border-radius: 10px;
  background-color: #1a87dd;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.default};
  font-weight: 500;
  margin-top: 20px;
  color: white;
  text-transform: uppercase;
  font-size: 1em;
`