import React, { useContext, useRef, useState } from 'react'
import * as C from './style'
import { ModalContext } from '../../../contexts/ModalContext';
import useCreateContext from '../../../hooks/useCreateFinance';
function CreateGoal() {
  const { setTypeModal } = useContext(ModalContext)
  const {
    type,
    setType,
    valueFinance,
    setValueFinance,
    selectedCategory,
    setCategory,
    checked,
    onChange,
    newTransaction
  } = useCreateContext()
  return (
    <div>
      <C.Container>
        <C.ContainerValue>
          <C.Label> * Valor da transacao separando centavos com . </C.Label>
          <C.ContainerInput>
            <C.IconInput>
              R$
            </C.IconInput>
            <C.InputText value={valueFinance} onChange={(event) => setValueFinance(event.target.value)} />
          </C.ContainerInput>
        </C.ContainerValue>
      </C.Container>
    </div>
  )
}

export default CreateGoal