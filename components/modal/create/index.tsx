import React, { useState } from 'react'
import * as C from './style'
import { AiFillCloseCircle } from "react-icons/ai";
import { dataTypes } from './dataOptions';
import ItemOption from './itemOption';
function ModalCreateFinance() {
  const [type, setType] = useState('')
  const [selectedCategory, setCategory] = useState('')
  console.log(selectedCategory)
  return (
    <C.Container>
      <C.HeaderContainer> <AiFillCloseCircle /> </C.HeaderContainer>
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
      <C.InputText />
    </C.Container>
  )
}

export default ModalCreateFinance