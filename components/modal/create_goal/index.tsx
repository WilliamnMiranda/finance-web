import React, { useContext, useRef, useState } from 'react'
import * as C from './style'
import { ModalContext } from '../../../contexts/ModalContext';
import ButtonSubmit from '../../button/submit';
import useCreateGoal from '../../../hooks/useCreateGoal';
function CreateGoal() {
  const { setTypeModal } = useContext(ModalContext)
  const {
    setName,
    setWallet,
    setValue,
    newTransaction,
    name,
    wallet,
    value
  } = useCreateGoal()
  const teste = (a: any) => {
    return 'a'
  }
  return (
    <div>
      <C.Container>

        <C.ContainerValue>
          <C.Label> * Qual nome da sua meta ?   </C.Label>
          <C.ContainerInput>
            <C.InputText value={name} onChange={(event) => setName(event.target.value)} />
          </C.ContainerInput>
        </C.ContainerValue>

        <C.ContainerValue>
          <C.Label> * Qual valor total da sua meta ?  </C.Label>
          <C.ContainerInput>
            <C.IconInput>
              R$
            </C.IconInput>
            <C.InputTextValue value={value} onChange={(event) => setValue(event.target.value)} />
          </C.ContainerInput>
        </C.ContainerValue>

        <C.ContainerValue>
          <C.Label> * Quanto voce já possui ?</C.Label>
          <C.ContainerInput>
            <C.IconInput>
              R$
            </C.IconInput>
            <C.InputTextValue value={wallet} onChange={(event) => setWallet(event.target.value)} />
          </C.ContainerInput>
        </C.ContainerValue>

        <ButtonSubmit onClick={() => newTransaction()} />
      </C.Container>
    </div>
  )
}

export default CreateGoal