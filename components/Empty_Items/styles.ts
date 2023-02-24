import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: transparent;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family:${({ theme }) => theme.fonts.default};
  font-weight: 400;
  font-size: 1.4em;
  color: rgba(0,0,0,0.5)
`

export const ContainerText = styled.p``