import React, { useContext, useRef, useState } from 'react'
import * as C from './style'
import { ModalContext } from '../../../contexts/ModalContext';
import useCreateContext from '../../../hooks/useCreateFinance';
import ButtonSubmit from '../../button/submit';
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
  const teste = (a: any) => {
    return 'a'
  }
  return (
    <div>
      <C.Container>

        <C.ContainerValue>
          <C.Label> * Qual nome da sua meta ?   </C.Label>
          <C.ContainerInput>
            <C.InputText value={valueFinance} onChange={(event) => setValueFinance(event.target.value)} />
          </C.ContainerInput>
        </C.ContainerValue>

        <C.ContainerValue>
          <C.Label> * Qual valor total da sua meta ?  </C.Label>
          <C.ContainerInput>
            <C.IconInput>
              R$
            </C.IconInput>
            <C.InputTextValue value={valueFinance} onChange={(event) => setValueFinance(event.target.value)} />
          </C.ContainerInput>
        </C.ContainerValue>

        <C.ContainerValue>
          <C.Label> * Quanto voce já possui ?</C.Label>
          <C.ContainerInput>
            <C.IconInput>
              R$
            </C.IconInput>
            <C.InputTextValue value={valueFinance} onChange={(event) => setValueFinance(event.target.value)} />
          </C.ContainerInput>
        </C.ContainerValue>

        <ButtonSubmit onClick={() => teste('a')} />
      </C.Container>
    </div>
  )
}

export default CreateGoal