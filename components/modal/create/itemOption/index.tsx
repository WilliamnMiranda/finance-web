import React, { SetStateAction } from 'react'
import * as C from './styles'
interface IProps {
  item: any
  selectedCategory: string,
  setCategory: React.Dispatch<SetStateAction<string>>
}
function ItemOption({ item, selectedCategory, setCategory }: IProps) {
  const selected = item.name === selectedCategory ? true : false
  console.log(item)
  return (
    <C.Container onClick={() => setCategory(item.name)} selected={selected} color={item.color}>
      <C.ContainerIcon> {item.icon} </C.ContainerIcon>
      {item.name}
    </C.Container>
  )
}

export default ItemOption