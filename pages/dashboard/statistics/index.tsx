import React from 'react'
import * as C from './styles'

interface IHeaderCard {
  name: string
}
const HeaderCard = ({ name }: IHeaderCard) => {
  return (
    <C.NameHeader>{name}</C.NameHeader>
  )
}

export default function Statistics() {
  return (
    <C.Container>
      <C.Incomes>
        <HeaderCard name="Income" />
      </C.Incomes>
      <C.Expences>
        <HeaderCard name="Income" />
      </C.Expences>
      <C.Graphic>
        <HeaderCard name="Income" />
      </C.Graphic>
    </C.Container>
  )
}
