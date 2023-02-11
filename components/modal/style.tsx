import styled from 'styled-components'

export const ContainerModal = styled.article`
height: 100vh;
width: 100%;
position: absolute;
background-color: rgba(0,0,0,0.5);
z-index: 100;
display: flex;
align-items: center;
justify-content: center;
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

export const Modal = styled.div`
  border-radius: 15px;
  padding: 15px;
  background-color: white;
`