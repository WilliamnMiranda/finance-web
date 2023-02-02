import React from 'react'
import * as C from './styles'
function ItemOption({ item, selectedCategory, setCategory }: any) {
  const selected = item.name === selectedCategory ? true : false
  return (
    <C.Container onClick={() => setCategory(item.name)} selected={selected} color={item.color}>
      <C.ContainerIcon> {item.icon} </C.ContainerIcon>
      {item.name}
    </C.Container>
  )
}

export default ItemOption