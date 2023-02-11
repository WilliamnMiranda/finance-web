import React, { useContext, useRef, useState } from 'react'
import * as C from './style'
import { dataTypes } from './dataOptions';
import ItemOption from './itemOption';
import { ModalContext } from '../../../contexts/ModalContext';
import { AiOutlineCheck } from "react-icons/ai";
import useCreateContext from '../../../hooks/useCreateFinance';
function ModalCreateFinance() {
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
    <C.Container>
      <C.ContainerTypeTransaction type={type}>
        <C.Label> * Selecione o tipo de transação </C.Label>
        <C.ContainerOptions>
          <C.Type onClick={() => setType('Deposit')}> Entrada </C.Type>
          <C.Type onClick={() => setType('Expense')}> Saida </C.Type>
        </C.ContainerOptions>
      </C.ContainerTypeTransaction>
      <C.ContainerTypes>
        <C.Label> * Selecione o tipo de transação </C.Label>
        <C.ListTypes>
          {
            dataTypes.map((item: any, index: number) => <ItemOption
              setCategory={setCategory}
              selectedCategory={selectedCategory}
              key={index} item={item} />)
          }
        </C.ListTypes>
      </C.ContainerTypes>
      <C.ContainerValue>
        <C.Label> * Valor da transacao separando centavos com . </C.Label>
        <C.ContainerInput>
          <C.IconInput>
            R$
          </C.IconInput>
          <C.InputText value={valueFinance} onChange={(event) => setValueFinance(event.target.value)} />
        </C.ContainerInput>
      </C.ContainerValue>
      <C.ContainerInstallments>
        <C.ContainerOptionCheckBox>
          <C.CheckboxContainer checked={checked} onClick={() => onChange((currentValue) => !currentValue)}>
            <AiOutlineCheck />
          </C.CheckboxContainer>
          <C.LabelCheckBox onClick={() => onChange((currentValue) => !currentValue)} htmlFor='check'> Transacao parcelada </C.LabelCheckBox>
        </C.ContainerOptionCheckBox>

        {
          checked && (
            <C.ContainerInputsInstallments>
              <C.ContainerInputInstallments>
                <C.Label> * Quantidade de parcelas </C.Label>
                <C.ContainerInput>
                  <C.IconInput>
                    N•
                  </C.IconInput>
                  <C.InputText value={valueFinance} onChange={(event) => setValueFinance(event.target.value)} />
                </C.ContainerInput>
              </C.ContainerInputInstallments>
              <C.ContainerInputInstallments>
                <C.Label> * Valor da parcela  </C.Label>
                <C.ContainerInput>
                  <C.IconInput>
                    R$
                  </C.IconInput>
                  <C.InputText value={valueFinance} onChange={(event) => setValueFinance(event.target.value)} />
                </C.ContainerInput>
              </C.ContainerInputInstallments>
            </C.ContainerInputsInstallments>
          )
        }
      </C.ContainerInstallments>
      <C.ButtonCreate onClick={() => newTransaction()}>
        criar
      </C.ButtonCreate>
    </C.Container>
  )
}

export default ModalCreateFinance