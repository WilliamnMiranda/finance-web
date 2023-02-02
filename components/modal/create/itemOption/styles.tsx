import styled from 'styled-components'
interface IItem {
  color: string
  selected: boolean
}
export const Container = styled.article<IItem>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color, selected }) => color};
  border: ${({ color, selected }) => selected ? '1px solid black' : color};
  padding: 5px 10px;
  border-radius: 15px;
  cursor: pointer;
  svg{
    margin-right: 10px;
  }
`
export const ContainerIcon = styled.div``