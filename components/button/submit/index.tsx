import React from 'react'
import * as C from './styles'
interface IProps {
  onClick: () => void
}
function ButtonSubmit({ onClick }: IProps) {
  return (
    <C.ButtonCreate onClick={() => onClick()}>
      criar
    </C.ButtonCreate>
  )
}

export default ButtonSubmit